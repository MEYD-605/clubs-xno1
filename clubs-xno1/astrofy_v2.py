import os

components_dir = "src/components"

def replace_next_remnants(file_content):
    # Aggressive replacement for Next.js features
    file_content = file_content.replace('import Link from "next/link"', 'const Link = (props: any) => <a {...props} />')
    file_content = file_content.replace("import Link from 'next/link'", "const Link = (props: any) => <a {...props} />")
    file_content = file_content.replace('import Image from "next/image"', 'const Image = (props: any) => <img {...props} />')
    file_content = file_content.replace("import Image from 'next/image'", "const Image = (props: any) => <img {...props} />")
    
    # Hooks replacement if any (Next navigation is common)
    file_content = file_content.replace('import { useRouter } from "next/navigation"', 'const useRouter = () => ({ push: (url: string) => window.location.href = url, back: () => window.history.back() })')
    file_content = file_content.replace('import { usePathname } from "next/navigation"', 'const usePathname = () => window.location.pathname')
    
    return file_content

for root, dirs, files in os.walk(components_dir):
    for file in files:
        if file.endswith(".tsx") or file.endswith(".jsx"):
            path = os.path.join(root, file)
            with open(path, "r") as f:
                content = f.read()
            
            new_content = replace_next_remnants(content)
            
            if new_content != content:
                with open(path, "w") as f:
                    f.write(new_content)
                print(f"Astrofied: {file}")

print("Deep Astrofication complete.")
