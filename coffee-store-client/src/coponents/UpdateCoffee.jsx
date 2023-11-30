import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;


    const handleUpdatedCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(updatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div className="bg-[F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold ">Update Coffee: {name}</h2>
            <form className="mt-5" onSubmit={handleUpdatedCoffee}>
                <div className="md:flex ">
                    <div className="join grid md:w-1/2">
                        <span>Coffee Name</span>
                        <input className="input input-bordered join-item" defaultValue={name} placeholder="Coffee Name" name="name" />
                    </div>
                    <div className="join grid md:w-1/2 ml-4">
                        <span>Available Quality</span>
                        <input className="input input-bordered join-item" defaultValue={quantity} placeholder="Available Quality" name="quantity" />
                    </div>
                </div>
                <div className="md:flex ">
                    <div className="join grid md:w-1/2">
                        <span>Supplier Name</span>
                        <input className="input input-bordered join-item" defaultValue={supplier} placeholder="Supplier Name" name="supplier" />
                    </div>
                    <div className="join grid md:w-1/2 ml-4">
                        <span>Taste</span>
                        <input className="input input-bordered join-item" placeholder="Taste" defaultValue={taste} name="taste" />
                    </div>
                </div>
                <div className="md:flex ">
                    <div className="join grid md:w-1/2">
                        <span>Category</span>
                        <input className="input input-bordered join-item" placeholder="Category" defaultValue={category} name="category" />
                    </div>
                    <div className="join grid md:w-1/2 ml-4">
                        <span>Details</span>
                        <input className="input input-bordered join-item" placeholder="Details" defaultValue={details} name="details" />
                    </div>
                </div>
                <div className="md:flex">
                    <div className="join grid md:w-1/2">
                        <span>Photo URl</span>
                        <input className="input input-bordered join-item" placeholder="Photo URL" defaultValue={photo} name="photo" />
                    </div>
                </div>

                <input type="submit" value='Update Coffee' className="btn btn-block mt-5" />

            </form >


        </div >
    );
};

export default UpdateCoffee;