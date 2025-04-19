import React from 'react'

// eslint-disable-next-line react/prop-types
function Result({url,thumbnail}) {

  const handleDownload = () => {
    // استخراج نام فایل از URL (اختیاری)
    const filename = url.split('/').pop() || 'downloaded_image.jpg';
    
    const link = document.createElement('a');
    link.href = url; // استفاده از پراپ `url` برای دانلود عکس اصلی
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div onClick={handleDownload} className='relative border-2 border-indigo-900 rounded-xl '>
          <p className='text-xl absolute p-3 text-center font3 text-blue-900'>Ice<span className='text-red-500'>DL</span></p>
        <img className='w-full h-auto rounded-xl' src={thumbnail} alt={url}/>
    </div>
  )
}

export default Result
