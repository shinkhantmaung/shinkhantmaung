---
title: Organizing Files by Year and Month with a Simple Bash Script
image: 
publishedAt: 2024-10-09
description: Organizing Files by Year and Month with a Simple Bash Script
slug: Organizing Files by Year and Month with a Simple Bash Script
isPublish: true
---


If you're like me and you’ve got tons of photos and files with dates in the filenames (whether it's in Burmese numerals or regular digits), you’ve probably thought about organizing them. Well, why not automate the whole thing with a quick Bash script?

In this article, I’ll walk you through a simple solution I’ve used to clean up and organize my files into year/month folders. It’s super handy if your file names contain dates, and you want to group them neatly.

#### What Does This Script Do?

Here’s the plan: the script reads each file, checks for the year and month in the filename, and creates a folder structure like this:

- **Year (e.g., 2023)**
  - **Month (e.g., 06)**

It moves the files into the right folders automatically. Cool, right?

And the best part? It works with both regular file names (like `IMG_20210528_115636.jpg`) and Burmese numerals (like `၂၀၂၃၀၆၁၀_၁၇၂၆၅၆.jpg`). The script even converts Burmese numerals into regular digits before sorting the files.

#### The Code

You can check full code [here](https://gist.github.com/shinkhantmaung/38c63b0def511ebdd3a83a3a463e577a). Here’s the script itself:

```bash
#!/bin/bash

# Script to organize files by year and month, supporting both Burmese and standard numerals.

for file in *; do
  # Convert Burmese numerals to Arabic numerals if present
  converted_file=$(echo "$file" | sed 'y/၀၁၂၃၄၅၆၇၈၉/0123456789/')
  
  # Extract the year (first 4 digits) and month (next 2 digits) from the file name
  year=$(echo "$converted_file" | grep -o -E '[0-9]{4}' | head -n 1)
  month=$(echo "$converted_file" | grep -o -E '[0-9]{6}' | head -n 1 | cut -c 5-6)
  
  # If both year and month are found, create the folder and move the file
  if [ -n "$year" ] && [ -n "$month" ]; then
    # Create the year/month folder if it doesn't exist
    mkdir -p "$year/$month"
    
    # Move the original file into the correct year/month folder
    mv "$file" "$year/$month/"
  fi
done
```

#### How It Works:

1. **Convert Burmese Numerals**: If your file names use Burmese numbers (e.g., `၂၀၂၃`), the script first converts those to regular numbers like `2023`. No worries, it does it automatically!

2. **Extract Year and Month**: Once the conversion is done (or skipped, if the file is already in regular numbers), the script grabs the first 4 digits as the year and the next 2 digits as the month.

3. **Move Files**: Finally, it creates a folder for that year and month if it doesn’t already exist, and moves the file in there.

#### Example:

Let’s say you’ve got a file called `IMG_20210528_115636.jpg`. The script will:
- Create a folder called `2021/05`.
- Move the file to `2021/05/IMG_20210528_115636.jpg`.

Similarly, if you’ve got a Burmese numeral file called `၂၀၂၃၀၆၁၀_၁၇၂၆၅၆.jpg`, the script will:
- Create a folder called `2023/06`.
- Move the file to `2023/06/၂၀၂၃၀၆၁၀_၁၇၂၆၅၆.jpg`.

#### How to Use It:

1. **Save the script**: Copy and paste the script into a file called `organize_files.sh` on your computer.
   
2. **Make it executable**: Run this command to make the script executable:
   ```bash
   chmod +x organize_files.sh
   ```

3. **Run the script**: Just navigate to the directory where your files are stored, and run the script:
   ```bash
   ./organize_files.sh
   ```

And that’s it! Your files should now be neatly organized into folders by year and month.

#### Why Use This Script?

If you’re like me and have a big collection of files with date-stamped names, this little script will save you so much time. Instead of manually creating folders and moving files one by one, you can let the script handle the heavy lifting. Plus, if you work with Burmese numerals, this will convert those dates for you too!

Feel free to modify and tweak it to fit your specific needs. Happy organizing! 😄

---
