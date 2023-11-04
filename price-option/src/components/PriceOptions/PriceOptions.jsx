import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym facilities",
                "Use of cardio equipment",
                "Locker room access",
                "1 complimentary fitness assessment",
                "Access to the swimming pool",
                "Access to the sauna",
                "Discounts on gym merchandise"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
                "Access to gym facilities",
                "Use of cardio and strength training equipment",
                "Group fitness classes",
                "Locker room access",
                "2 complimentary fitness assessments",
                "Access to the swimming pool",
                "Access to the sauna",
                "Discounts on gym merchandise",
                "Unlimited towel service"
            ]
        },
        {
            "id": 3,
            "name": "VIP Membership",
            "price": 99.99,
            "features": [
                "Unlimited access to gym facilities",
                "Use of cardio and strength training equipment",
                "Group fitness classes",
                "Locker room access with sauna and steam room",
                "4 complimentary fitness assessments",
                "Access to the swimming pool",
                "Access to the sauna",
                "Discounts on gym merchandise",
                "Unlimited towel service",
                "Personal training session (once a month)",
                "Nutrition consultation (quarterly)"
            ]
        }
    ];

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }

            </div>

        </div>


    );
};

export default PriceOptions;