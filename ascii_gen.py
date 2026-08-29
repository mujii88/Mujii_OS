from PIL import Image
import sys

def image_to_ascii(image_path, width=80):
    chars = ["@", "%", "#", "*", "+", "=", "-", ":", ".", " "]
    try:
        img = Image.open(image_path).convert('L')
    except Exception as e:
        print(f"Error: {e}")
        return
    
    aspect_ratio = img.height / img.width
    new_height = int(aspect_ratio * width * 0.55)
    img = img.resize((width, new_height))
    
    pixels = img.getdata()
    new_pixels = [chars[pixel // 26] for pixel in pixels]
    new_pixels = ''.join(new_pixels)
    
    ascii_image = [new_pixels[index:index + width] for index in range(0, len(new_pixels), width)]
    return "\n".join(ascii_image)

if __name__ == '__main__':
    art = image_to_ascii('/home/one/.gemini/antigravity/scratch/portfolio/public/profile.jpg', 60)
    print(art)
