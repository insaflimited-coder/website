// update-blogs.mjs
import fs from 'fs/promises';
import path from 'path';

// ----------------------------------------------------
// ⚠️ এখানে আপনার blogData.ts ফাইলের সঠিক পাথ দিন
// ----------------------------------------------------
const blogDataPath = path.resolve('./app/blog/data/blogData.ts'); // আপনার পাথ অনুযায়ী পরিবর্তন করুন

async function addImageToBlogs() {
  try {
    console.log(`🔄 ফাইল পড়া হচ্ছে: ${blogDataPath}`);
    let fileContent = await fs.readFile(blogDataPath, 'utf-8');

    // Regex ব্যবহার করে blogPosts array খুঁজে বের করা
    const regex = /(export const blogPosts: Blog\[\] = \[)([\s\S]*?)(\];)/;
    const match = fileContent.match(regex);

    if (!match) {
      console.error('❌ "blogPosts" array খুঁজে পাওয়া যায়নি।');
      return;
    }

    const arrayContentString = match[2];

    // স্ট্রিংকে একটি ফাংশনের মাধ্যমে eval করে জাভাস্ক্রিপ্ট অবজেক্টে পরিণত করা
    // এটি JSON.parse এর চেয়ে ভালো কাজ করে কারণ এখানে unquoted key/trailing comma থাকতে পারে
    const blogPosts = new Function(`return [${arrayContentString}]`)();
    
    let updatedCount = 0;

    // প্রতিটি ব্লগে image প্রপার্টি যোগ করা
    const updatedBlogPosts = blogPosts.map(blog => {
      // যদি image প্রপার্টি আগে থেকেই না থাকে
      if (!blog.image) {
        // ✅ slug ব্যবহার করে একটি ইউনিক ইমেজ পাথ তৈরি করা
        // আপনি চাইলে .jpg, .png, .webp ব্যবহার করতে পারেন
        const imageName = `${blog.slug}.webp`; 
        blog.image = `/images/blog/${imageName}`;
        updatedCount++;
      }
      return blog;
    });

    // নতুন array-কে সুন্দর ফরম্যাটে স্ট্রিং-এ পরিণত করা
    // আমরা object-গুলোকে আলাদা লাইনে সুন্দর করে সাজাবো
    const updatedArrayString = updatedBlogPosts.map(blog => {
      // প্রতিটি object-কে স্ট্রিং হিসেবে ফরম্যাট করা
      let blogString = '  {\n';
      blogString += Object.entries(blog).map(([key, value]) => {
        let formattedValue;
        if (key === 'content') {
          // content স্ট্রিং অনেক বড়, তাই এটিকে ছোট করে দেখাই
          formattedValue = '`...`'; // অথবা আসল content রাখতে পারেন, কিন্তু ফাইল অনেক বড় হবে
          return `    ${key}: \`${blog.content.replace(/`/g, '\\`')}\``; // Keep original content
        } else if (typeof value === 'string') {
          formattedValue = `'${value.replace(/'/g, "\\'")}'`;
        } else if (Array.isArray(value)) {
          formattedValue = `[${value.map(v => `'${v}'`).join(', ')}]`;
        } else {
          formattedValue = value;
        }
        return `    ${key}: ${formattedValue}`;
      }).join(',\n');
      blogString += '\n  }';
      return blogString;
    }).join(',\n');
    
    // মূল ফাইল কন্টেন্টে নতুন array স্ট্রিং রিপ্লেস করা
    const finalContent = fileContent.replace(
      match[0], 
      `export const blogPosts: Blog[] = [\n${updatedArrayString}\n];`
    );

    // ফাইল ওভাররাইট করা
    await fs.writeFile(blogDataPath, finalContent, 'utf-8');

    console.log(`✅ সফল! ${updatedCount} টি ব্লগে নতুন 'image' প্রপার্টি যোগ করা হয়েছে।`);
    console.log(`👍 ফাইল সেভ করা হয়েছে: ${blogDataPath}`);

  } catch (error) {
    console.error('💥 একটি ত্রুটি ঘটেছে:', error);
  }
}

// স্ক্রিপ্টটি রান করুন
addImageToBlogs();