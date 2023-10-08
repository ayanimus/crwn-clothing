import ProductCard from 'components/product-card/product-card.component'
import {CategoryPreviewContainer, Title, Preview} from './category-preview.styles.jsx'

import React from 'react'
import {Link} from 'react-router-dom'

const CategoryPreview = ({title, products}) => (
	<CategoryPreviewContainer>
		<h2>
			<Title to={title}>{title.toUpperCase()}</Title>
		</h2>
		<Preview>
			{
				products
					.filter((_, idx) => idx < 4)
					.map(product =>
						<ProductCard key={product.id} product={product}/>)
			}
		</Preview>
	</CategoryPreviewContainer>
)

export default CategoryPreview
