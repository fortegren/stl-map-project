//import { map } from './breweries.json';


// SET UP MAP

// Set the map variable
const myMap = L.map('map');

// Load the basemap
const myBasemap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'});


// Add basemap to map id
myBasemap.addTo(myMap);

// Set view of the map
myMap.setView([38.63988682268097,-90.26203421992685], 12);


// class constructors
class Location {
	constructor (id, name, location, hours) {
		this.id = id;
		this.name = name;
        this.location = location;
        this.hours = hours;
	}
	
}

class Restaurant extends Location{
	constructor(id, name, location, neighborhood, cuisine, delivers, hours) {
        super(id, name, location, hours);
        this.neighborhood = neighborhood;
        this.cuisine = cuisine;
		this.delivers = delivers || 'No';
		this.type = "Restaurant";
  }
}

class College extends Location{
	constructor(id, name, location, enrollment, cost, costAfterAid, gradRate, acceptanceRate, hours) {
        super(id, name, location, hours);
        this.enrollment = enrollment;
        this.cost = cost;
        this.costAfterAid = costAfterAid;
        this.gradRate = gradRate;
		this.acceptanceRate = acceptanceRate;
		this.type = "College";
  }
}

class Brewery extends Location{
    constructor(id, name, location, hours, sizeType, openToPublic, description, icon, website) {
        super(id, name, location, hours);

        this.sizeType = sizeType;
        this.openToPublic = openToPublic;
		this.description = description;
		this.icon = `<img src="${icon}">` || '';
		this.website = website;
		this.type = "Brewery";
    }
}


let places = [
	new Restaurant(
		'restaurant 1',
		'Brasserie by Niche', 
		[38.6400704,-90.2618051],
		'Central West End',
		'French',
		'Yes',
		{
			0 : {'open': [5,00,00], 'close': [22,0,00]},
			1 : {'open': [5,00,00], 'close': [22,0,00]},
			2 : {'open': [5,00,00], 'close': [22,0,00]},
			3 : {'open': [5,00,00], 'close': [22,0,00]},
			4 : {'open': [5,00,00], 'close': [22,0,00]},
			5 : {'open': [5,00,00], 'close': [22,0,00]},
			6 : {'open': [5,00,00], 'close': [22,0,00]}
	  }
	),
	
	new Restaurant(
		'restaurant 2',
		'Cinder House',
		[38.6337347,-90.1848364],
		'Downtown',
		'South American',
		'No',
		{
			0 : {'open': [8,00,00], 'close': [20,45,00]},
			1 : {'open': [8,00,00], 'close': [21,45,00]},
			2 : {'open': [8,00,00], 'close': [20,45,00]},
			3 : {'open': [8,00,00], 'close': [20,45,00]},
			4 : {'open': [8,00,00], 'close': [20,45,00]},
			5 : {'open': [8,00,00], 'close': [20,45,00]},
			6 : {'open': [8,00,00], 'close': [20,45,00]}
	  }
	),
	
	new Restaurant(
		'restaurant 3',
		'Pappys Smokehouse',
		[38.63547690613233, -90.22403227930391],
		'Midtown',
		'BBQ',
		'Yes',
		{
			0 : {'open': [11,00,00], 'close': [16,00,00]},
			1 : {'open': [00,00,00], 'close': [00,00,00]},
			2 : {'open': [00,00,00], 'close': [00,00,00]},
			3 : {'open': [11,00,00], 'close': [16,00,00]},
			4 : {'open': [11,00,00], 'close': [18,00,00]},
			5 : {'open': [11,00,00], 'close': [18,00,00]},
			6 : {'open': [11,00,00], 'close': [18,00,00]}
	  }
	),
	
	new College (
		'college 1',
		'Saint Louis University',
		[38.63534375222075, -90.23417256097093],
		'6,917',
		'$62,868',
		'$27,861',
		'74%',
		'58%',
		{
			0 : {'open': [00,00,00], 'close': [00,00,00]},
			1 : {'open': [8,30,00], 'close': [17,00,00]},
			2 : {'open': [8,30,00], 'close': [17,00,00]},
			3 : {'open': [8,30,00], 'close': [17,00,00]},
			4 : {'open': [8,30,00], 'close': [17,00,00]},
			5 : {'open': [8,30,00], 'close': [17,00,00]},
			6 : {'open': [00,00,00], 'close': [00,00,00]}
	  }
	),
	
	new College(
		'college 2',
		'Washington Universtity of St. Louis',
		[38.64828615450558, -90.31110373064315],
		'7,356',
		'$76,910',
		'$27,000',
		'94%',
		'14%',
		{
			0 : {'open': [00,00,00], 'close': [00,00,00]},
			1 : {'open': [8,30,00], 'close': [17,00,00]},
			2 : {'open': [8,30,00], 'close': [17,00,00]},
			3 : {'open': [8,30,00], 'close': [17,00,00]},
			4 : {'open': [8,30,00], 'close': [17,00,00]},
			5 : {'open': [8,30,00], 'close': [17,00,00]},
			6 : {'open': [00,00,00], 'close': [00,00,00]}
	  }
	),
	
	new Restaurant(
		'restaurant 4',
		'Starbucks',
		[38.64485153724371, -90.26130792197554],
		'Central West End',
		'Coffee Shop',
		'No',
		{
			0 : {'open': [5,30,00], 'close': [20,00,00]},
			1 : {'open': [5,30,00], 'close': [20,00,00]},
			2 : {'open': [5,30,00], 'close': [20,00,00]},
			3 : {'open': [5,30,00], 'close': [20,00,00]},
			4 : {'open': [5,30,00], 'close': [20,00,00]},
			5 : {'open': [5,30,00], 'close': [20,00,00]},
			6 : {'open': [5,30,00], 'close': [20,00,00]}
	  }
	),
	
	new Restaurant(
		'restaurant 5',
		'Starbucks',
		[38.65163855865583, -90.33797078145243],
		'Clayton',
		'Coffee Shop',
		'No',
		{
			0 : {'open': [5,30,00], 'close': [20,00,00]},
			1 : {'open': [5,30,00], 'close': [20,00,00]},
			2 : {'open': [5,30,00], 'close': [20,00,00]},
			3 : {'open': [5,30,00], 'close': [20,00,00]},
			4 : {'open': [5,30,00], 'close': [20,00,00]},
			5 : {'open': [5,30,00], 'close': [20,00,00]},
			6 : {'open': [5,30,00], 'close': [20,00,00]}
	  }
	),
	
	new Restaurant(
		'restaurant 6',
		'Lulus',
		[38.600071219500784, -90.24329953663161],
		'Tower Grove East',
		'Vegan',
		'Yes',
		{
			0 : {'open': [0,00,00], 'close': [00,00,00]},
			1 : {'open': [00,00,00], 'close': [00,00,00]},
			2 : {'open': [12,00,00], 'close': [20,00,00]},
			3 : {'open': [12,00,00], 'close': [20,00,00]},
			4 : {'open': [12,00,00], 'close': [20,00,00]},
			5 : {'open': [12,00,00], 'close': [20,00,00]},
			6 : {'open': [12,00,00], 'close': [20,00,00]}
	  }
	),
	
	new Restaurant(
		'restaurant 7',
		'MoKaBes Coffee House',
		[38.603757825938615, -90.24269872672659],
		'South Grand',
		'Coffee Shop',
		'No',
		{
			0 : {'open': [08,00,00], 'close': [20,00,00]},
			1 : {'open': [00,00,00], 'close': [00,00,00]},
			2 : {'open': [08,00,00], 'close': [20,00,00]},
			3 : {'open': [08,00,00], 'close': [20,00,00]},
			4 : {'open': [08,00,00], 'close': [20,00,00]},
			5 : {'open': [08,00,00], 'close': [20,00,00]},
			6 : {'open': [08,00,00], 'close': [20,00,00]}
	  }
	)
	
];

// get breweries and create brewerties from each of them ; append to places
breweries.map(brew => {
	try{
		let brewLocation = new Brewery(brew.id, brew.brewery.name,
		[brew.latitude, brew.longitude],
		{
			0 : {'open': [08,00,00], 'close': [20,00,00]},
			1 : {'open': [00,00,00], 'close': [00,00,00]},
			2 : {'open': [08,00,00], 'close': [20,00,00]},
			3 : {'open': [08,00,00], 'close': [20,00,00]},
			4 : {'open': [08,00,00], 'close': [20,00,00]},
			5 : {'open': [08,00,00], 'close': [20,00,00]},
			6 : {'open': [08,00,00], 'close': [20,00,00]}
	},
		brew.locationTypeDisplay,
		brew.openToPublic,
		brew.brewery.description,
		brew.brewery.hasOwnProperty('images') ? brew.brewery.images.icon : '',
		brew.brewery.hasOwnProperty('website') ? brew.brewery.website : ''
		);

		places.push(brewLocation);
	} catch {};
  	//alert(info);
});



// define variables
let deliveryFilter = false;
let openFilter = false;
let cuisineFilter = false;
let typeFilter = false;
let cuisineList = [];

let filteredPlaces;

let anyFilter = false;
let cuisineSelection;
let typeSelection;



// create a layerGroup with markers from all the places 
let allPlaceLayer = L.layerGroup(createMarkers(places));


// populate cuisines dropdown from restaurant cuisines
places.map(place => { 
		if (place instanceof Restaurant && !cuisineList.includes(place.cuisine)) {
				cuisineList.push(place.cuisine);
			
			  populateCuisines(place.cuisine);
			
			;}
});


// show places on the map
showAllPlaces();

// on click buttons in the doc functions
$(document).ready(function(){
	
	$(".in-view").click( function(){
		let selectedLocationId = $(this).attr('id');
		
		let selectedLocationObjects = places.filter(place => place.id == selectedLocationId);
		
		myMap.flyTo(selectedLocationObjects[0].location, 15);

		//alert(Object.keys(selectedLocationObjects[0].markerID._popup._content));
		//alert(selectedLocationObjects[0].markerID._popup._content)

		setTimeout(function () {
			selectedLocationObjects[0].markerID.openPopup()
		}, 0);
	});


	$(".filters").click( function(){
		
		if ($(this).is("#delivery"))  {
			
			deliveryFilter = !deliveryFilter;
			$(this).text(deliveryFilter ? 'Show All' : 'Delivery Only');
		
		} else if ($(this).is("#open")) {
			
			openFilter = !openFilter;
			setOpenNow();
			
			$(this).text(openFilter ? 'Show All' : 'Open Now');
			
		} else if ($(this).is(".cuisine")) {
			
			cuisineFilter = ($(this).is("#all")) ? false : true;
			
			cuisineSelection = $(this).text();
			
			
			$(".cuisinebutton").text(cuisineFilter ? 
				cuisineSelection : 'Cuisine');
			
		} else if ($(this).is(".type")) {
			
			typeFilter = ($(this).is("#all")) ? false : true;
			
			typeSelection = $(this).attr("id");
			
			$(".typebutton").text(typeFilter ? 
				`${typeSelection}s` : 'Category');
			
		}
		
		filteredPlaces = places.filter(place => getFiltered(place));
		
		//console.log(filteredPlaces.map(p => { return p.name }));
		
		(deliveryFilter || openFilter || cuisineFilter || typeFilter) ? 
			showFilteredPlaces(filteredPlaces) : showAllPlaces();

	});
});

function getFiltered(obj) {

			let filterPropertyDict = [
				{
					filter: deliveryFilter, 
					property: obj instanceof Restaurant == true && obj.delivers == 'Yes'
				},
				{
					filter: openFilter, 
					property: obj.openNow == true
				},
				{
					filter: cuisineFilter, 
					property: obj instanceof Restaurant == true && obj.cuisine == cuisineSelection
				},
				{
					filter: typeFilter, 
					property: typeSelection == obj.constructor.name
				}
			];
	
    let showProperties = filterPropertyDict.map(filterType => {
																 return (filterType.filter == true ? 
																	filterType.property : true);
	} 
																 );
	
	return !showProperties.includes(false);
}

function createMarkers(placesToAdd){
	
	  let markers = 
				placesToAdd.map(place => {

					let popup = L.popup({
						maxHeight: 300
					})
    				.setContent(getText(place));
	
					let marker = L.marker(place.location)
					.bindPopup(
						popup
					)
					.openPopup();
	
					place.markerID = marker;
					
					return marker;
				}); 
	
	return markers;
	 
}


function showAllPlaces() {
	filteredPlaces = places;
	console.log(filteredPlaces.map(p => { return p.name }));
	populateListResults(filteredPlaces);
	allPlaceLayer.addTo(myMap);
	
}


function populateCuisines(newCuisine) {
	
		let cuisineChoice = document.createElement("p");
	
		cuisineChoice.innerHTML = newCuisine;
	
		cuisineChoice.classList.add("filters");
		cuisineChoice.classList.add("cuisine");
	
		document.getElementById("cuisineDropdown").appendChild(cuisineChoice);
  
}


let filteredLayer = allPlaceLayer;

function showFilteredPlaces(filteredPlaces){
	filteredLayer.remove();

	let filteredLayerMarkers = filteredPlaces.map(place => {
			return place.markerID;
		});

	populateListResults(filteredPlaces);
		
	filteredLayer = L.layerGroup(filteredLayerMarkers);
	
	allPlaceLayer.remove();
	
	filteredLayer.addTo(myMap);
}


function populateListResults(places){	
	let root = document.getElementById("result-list");
	$(root).empty();

	places.map(place => {
			let result = document.createElement("li");

			result.innerHTML = `<strong>${place.name}</strong>
								<br><p>${place.type}`;


	result.classList.add("in-view");
	result.id = place.id;
	document.getElementById("result-list").appendChild(result);
		});

	L.DomEvent.disableScrollPropagation(document.getElementById("result-list"));
}



function getText(place){
	
	let restaurantText = `
	  <h2>${place.name}</h2>
    <p><b>Neighborhood:</b> ${place.neighborhood} </p>
		<p><b>Cuisine:</b> ${place.cuisine}</p>
    <p><b>Delivers:</b> ${place.delivers}</p>`;
	
	let collegeText = 		`
		<h2>${place.name}</h2>
		<p><b>Undergraduate Enrollment:</b> ${place.enrollment}</p>
		<p><b>Avg cost before aid:</b> ${place.cost}</p>
		<p><b>Avg cost after aid:</b> ${place.costAfterAid}</p>
		<p><b>Graduation Rate:</b> ${place.gradRate}</p>
		<p><b>Acceptance Rate:</b> ${place.acceptanceRate}</p>
	`;

	let breweryText = `
	<h2>${place.name}</h2>
	${place.icon}
	<p><b>Type:</b> ${place.sizeType}</p>
	<p><b>Open to Public:</b> ${place.openToPublic}</p>
	<p><b>Description:</b> ${place.description}</p>`;
	
	let resultText = place instanceof College ? collegeText : place instanceof Restaurant ? restaurantText : breweryText;

	return resultText;
}


function setOpenNow(){
	let now = new Date(Date.now());
	let dateOpen = new Date(Date.now());
	let dateClose = new Date(Date.now());
	
	places.map(place => {

		let openTime = place.hours[now.getDay()].open;
		let closeTime = place.hours[now.getDay()].close;
		
		dateOpen.setHours(openTime[0], openTime[1], openTime[2]);
		dateClose.setHours(closeTime[0], closeTime[1], closeTime[2]);

		place.openNow = dateOpen < now && dateClose > now;

	});
}