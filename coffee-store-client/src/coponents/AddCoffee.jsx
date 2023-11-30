import Swal from "sweetalert2";

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }



    return (
        <div className="bg-[F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold ">Add a Coffee</h2>
            <form className="mt-5" onSubmit={handleAddCoffee}>
                <div className="md:flex ">
                    <div className="join grid md:w-1/2">
                        <span>Coffee Name</span>
                        <input className="input input-bordered join-item" placeholder="Coffee Name" name="name" />
                    </div>
                    <div className="join grid md:w-1/2 ml-4">
                        <span>Available Quality</span>
                        <input className="input input-bordered join-item" placeholder="Available Quality" name="quantity" />
                    </div>
                </div>
                <div className="md:flex ">
                    <div className="join grid md:w-1/2">
                        <span>Supplier Name</span>
                        <input className="input input-bordered join-item" placeholder="Supplier Name" name="supplier" />
                    </div>
                    <div className="join grid md:w-1/2 ml-4">
                        <span>Taste</span>
                        <input className="input input-bordered join-item" placeholder="Taste" name="taste" />
                    </div>
                </div>
                <div className="md:flex ">
                    <div className="join grid md:w-1/2">
                        <span>Category</span>
                        <input className="input input-bordered join-item" placeholder="Category" name="category" />
                    </div>
                    <div className="join grid md:w-1/2 ml-4">
                        <span>Details</span>
                        <input className="input input-bordered join-item" placeholder="Details" name="details" />
                    </div>
                </div>
                <div className="md:flex">
                    <div className="join grid md:w-1/2">
                        <span>Photo URl</span>
                        <input className="input input-bordered join-item" placeholder="Photo URL" name="photo" />
                    </div>
                </div>

                <input type="submit" value='Add Coffee' className="btn btn-block mt-5" />

            </form >


        </div >

    );
};

export default AddCoffee;