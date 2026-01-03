import os
import re

components_dir = "src/components"

for root, dirs, files in os.walk(components_dir):
    for file in files:
        if file.endswith(".tsx") or file.endswith(".jsx"):
            path = os.path.join(root, file)
            with open(path, "r") as f:
                content = f.read()
            
            # Replace next/link
            content = content.replace('import Link from "next/link"', 'const Link = (props: any) => <a {...props} />')
            content = content.replace("import Link from 'next/link'", "const Link = (props: any) => <a {...props} />")
            
            # Replace next/image
            content = content.replace('import Image from "next/image"', 'const Image = (props: any) => <img {...props} />')
            content = content.replace("import Image from 'next/image'", "const Image = (props: any) => <img {...props} />")
            
            # Replace @/components with absolute/relative if necessary, but alias should work.
            
            with open(path, "w") as f:
                f.write(content)

print("Astrofication complete.")
