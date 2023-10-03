import './checkout.styles.scss'

const Checkout = () => {
	const abc = 0
	return (
		<div>
			<table className='table-container'>
				<tr>
					<th>Company</th>
					<th>Contact</th>
					<th>Country</th>
				</tr>
				<tr>
					<td>Alfreds Futterkiste</td>
					<td>Maria Anders</td>
					<td>Germany</td>
				</tr>
				<tr>
					<td>Centro comercial Moctezuma</td>
					<td>Francisco Chang</td>
					<td>Mexico</td>
				</tr>
			</table>
		</div>
	)
}

export default Checkout
