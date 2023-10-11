// console.log('working');

const loadPhones = async (searchtext = "13", isshowall) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchtext}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isshowall);
}
const displayPhones = (phones, isshowall) => {
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    // clear phone container cardds before adding new card
    phoneContainer.textContent = '';
    const showAllcontainer = document.getElementById('show-all-container');

    if (phones.length > 12 && !isshowall) {
        showAllcontainer.classList.remove('hidden');
    }
    else {
        showAllcontainer.classList.add('hidden');
    }



    // dispay 1st 10 phones
    if (!isshowall) {
        phones = phones.slice(0, 10);
    }




    phones.forEach(phone => {
        // console.log(phone);
        // create div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-96 bg-gray-100 p-4  shadow-xl`;
        // set inner html
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
                <button onclick="handleshowdetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
        </div>`;
        phoneContainer.appendChild(phoneCard);

    })
    // hide loading spinner
    toggoleLoadSpinner(false);
};

// details show card
const handleshowdetail = async (id) => {
    console.log('Clicked show details', id);
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    // console.log(data);
    const phone = data.data;

    showPhonedetails(phone);





};
const showPhonedetails = (phone) => {
    showDetailsModal.showModal();

}


const handlesearch = (isshowall) => {
    toggoleLoadSpinner(true);

    // console.log('Search handle');
    const searchfield = document.getElementById('search-field');
    const searchtext = searchfield.value;
    console.log(searchtext);
    loadPhones(searchtext, isshowall);
};
const toggoleLoadSpinner = (isloading) => {
    const loadingSpinner = document.getElementById('loading-spin');
    if (isloading) {
        loadingSpinner.classList.remove('hidden');
    }
    else {
        loadingSpinner.classList.add('hidden');
    }

};


const handleshowall = () => {
    handlesearch(true);
}

loadPhones();