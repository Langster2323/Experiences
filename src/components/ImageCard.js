import React from 'react'

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',')
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="container">
                <img src={image.img} alt="" className="w-full" />
            </div>
            
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                Photo by Ahkeem
                </div>
                <ul>
                <li>
                    <strong>Title: </strong>
                    {image.title}
                </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map(tag => (
                    <span key={image.id} className="inline-block 
                    bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {tag}
                    </span>
                ))}
                
            </div>
        </div>
    )
}

export default ImageCard
