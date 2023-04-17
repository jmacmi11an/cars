import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
    const dispatch = useDispatch();
    const { cars, name } = useSelector(({form, cars: { data, searchTerm }}) => {
        const filteredCars = data.filter((car) => 
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return {
            cars: filteredCars,
            name: form.name
        };
    })

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id))
    }

    const renderedCars = cars.map((car) => {
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
        console.log(bold, 'bold is this true or false')
        return (<div key={car.id} className={`panel ${bold && 'has-text-weight-bold'}`}>
            <p>
                {car.name} - ${car.cost}
            </p>
            <button 
                className="button is-danger" 
                onClick={() => handleCarDelete(car)}
            >
                Delete
            </button>
        </div>)
    })

    return <div>
        {renderedCars}
        <hr />
    </div>
}

export default CarList;