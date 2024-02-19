import fs from 'node:fs/promises'
import { globby } from 'globby'
import { minify } from 'html-minifier'

// Get all HTML files from the output directory
const path = './.vercel/output/static'
const files = await globby(`${path}/**/*.html`)

await Promise.all(
    files.map(async (file) => {
   	 console.log('Processing file:', file)
   	 let html = await fs.readFile(file, 'utf-8')

   	 // Minify the HTML
   	 html = minify(html, {
   		 removeComments: true,
   		 preserveLineBreaks: true,
   		 collapseWhitespace: true,
		 minifyJS: true
   	 })
   	 await fs.writeFile(file, html)
    })
)