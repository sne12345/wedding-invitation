import os
from PIL import Image, ImageOps

def compress_image(input_path, output_path, max_size=1080, quality=80):
    img = Image.open(input_path)
    img = ImageOps.exif_transpose(img)  # EXIF 방향 보정

    width, height = img.size
    long_edge = max(width, height)
    if long_edge > max_size:
        scale = max_size / long_edge
        new_size = (int(width * scale), int(height * scale))
        img = img.resize(new_size, Image.LANCZOS)

    img = img.convert('RGB')  # PNG 등도 JPEG로 저장 가능하게
    img.save(output_path, 'JPEG', quality=quality, optimize=True)

def batch_compress_photos(input_dir, output_dir, max_index=1000, max_size=1080, quality=80):
    os.makedirs(output_dir, exist_ok=True)
    valid_exts = ['.jpg', '.jpeg', '.png']

    for i in range(max_index):
        for ext in valid_exts:
            input_filename = f'photo{i}{ext}'
            input_path = os.path.join(input_dir, input_filename)
            if not os.path.exists(input_path):
                continue

            output_filename = f'compressed_photo{i}.jpg'  # 저장은 무조건 JPEG로
            output_path = os.path.join(output_dir, output_filename)

            try:
                compress_image(input_path, output_path, max_size=max_size, quality=quality)
                print(f'압축 완료: {input_filename} → {output_filename}')
            except Exception as e:
                print(f'압축 실패: {input_filename} - {e}')
            break  # 하나만 처리하고 루프 탈출 (같은 번호 중복 방지)

# 사용 예시
input_dir = 'public/gallery'
output_dir = 'public/gallery'
batch_compress_photos(input_dir, output_dir, max_index=100)
