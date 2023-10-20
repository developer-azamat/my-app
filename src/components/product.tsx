"use client"
import { ProductType } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import CustomImage from './image'

const Product: FC<{ product: ProductType }> = ({ product }) => {
	return (
		<Link
			href={`/product/${product.id}`}
			className='h-96 flex flex-col group p-6 rounded-lg hover:scale-105 transition-transform ease-out duration-200 border'
		>
			<div className='relative max-h-72 hover:scale-105 transition-transform ease-out flex-1 duration-200'>
				<CustomImage fill product={product}/>
			</div>
			<h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
				{product.category}
			</h3>
			<div className='font-semibold flex items-center justify-between mt-4 mb-1'>
				<p className='w-44 truncate'>{product.title}</p>
				<p>${product.price}</p>
			</div>
			<p className='leading-relaxed line-clamp-2 text-base'>
				{product.description}
			</p>
		</Link>
	)
}

export default Product