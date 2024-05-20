<script>
	import Status from '../lib/components/status.svelte';
  import DropDown from '../lib/components/Drop-down.svelte';
// import jsonData from '../../data/index.json'

const info = [
{
  "id": "inventory",
  "heading": "Inventory",
  "type": "Aurora",
  "kind": "Zephyr",
  "subscription": true
},
{
  "id": "customers",
  "heading": "Customers",
  "type": "Orion",
  "kind": "Nimbus",
  "subscription": false
},
{
  "id": "orders",
  "heading": "Orders",
  "type": "Cassiopeia",
  "kind": "Terra",
  "subscription": true
},
{
  "id": "shipments",
  "heading": "Shipments",
  "type": "Lyra",
  "kind": "Voyager",
  "subscription": false
},
{
  "id": "discounts",
  "heading": "Discounts",
  "type": "Andromeda",
  "kind": "Celestial",
  "subscription": true
},
{
  "id": "notifications",
  "heading": "Notifications",
  "type": "Phoenix",
  "kind": "Eclipse",
  "subscription": false
},
{
  "id": "downloads",
  "heading": "Downloads",
  "type": "Stellar",
  "kind": "Solstice",
  "subscription": true
},
{
  "id": "settings",
  "heading": "Settings",
  "type": "Neptune",
  "kind": "Galaxy",
  "subscription": false
}
]
let open = false;

function toggleSidebar() {
  open = true;
}
let slideOpen = false;


function openMenu() {
 console.log("openMenu clidcked")
 slideOpen = true;

}
function closeMenu() {
 console.log("closeMenu clidcked")
 slideOpen = false;
}

let isImage1 = true;
</script>

<style>
/* Smooth transitions */
.sidebar-transition {
  transition-property: width, margin-left;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
}
</style>

<div class="flex h-screen bg-purplevol-1200">
<!-- First Box -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="w-[100px] h-full bg-purplevol-1000 text-white flex items-center justify-center cursor-pointer">
  <aside
  class="flex flex-col justify-between items-center w-[100px] h-[100vh] bg-purplevol-1000 shadow-custom z-10 absolute"
>
<img src="images/logo.svg" alt="logo" class="my-7" />
 <div class="flex flex-col justify-between h-full" id="nav-item1">
        <nav
          class="nav-list flex flex-col justify-evenly items-center h-[588px]"
        >
         
            <a on:click={openMenu}
           
              href="#inventory"
              class="hover:bg-[#2F2F5C] h-14 w-14 rounded-lg flex justify-center items-center"
              ><img
                src="images/inventory.svg"
                alt="#"
                class="hover:scale-110 hover:fill-white"
            /></a>
         

          <a on:click={openMenu}
          
            href="#customers"
            class="hover:bg-[#2F2F5C] h-14 w-14 rounded-lg flex justify-center items-center"
            ><img
              src="images/customers.svg"
              alt="#"
              class="hover:scale-110 hover:fill-white hover:stroke-black"
            />
          </a>

          <a on:click={openMenu}
          
            href="#orders"
            class="hover:bg-[#2F2F5C] h-14 w-14 rounded-lg flex justify-center items-center"
            >{#if slideOpen}
            <img src="images/orders-white.svg" alt="1" class="hover:scale-110 hover:fill-white" />
          {:else}
            <img src="images/orders.svg" alt="2" class="hover:scale-110 hover:fill-white" />
          {/if}</a>
        
   
          <a   on:click={openMenu}
          
            href="#shipments"
            class="hover:bg-[#2F2F5C] h-14 w-14 rounded-lg flex justify-center items-center"
            ><img
              src="images/shipment.svg"
              alt="#"
              class="hover:scale-110 hover:fill-white"
          /></a>

          <a  on:click={openMenu}
          
            href="#discounts"
            class="hover:bg-[#2F2F5C] h-14 w-14 rounded-lg flex justify-center items-center"
            ><img
              src="images/discount.svg"
              alt="#"
              class="hover:scale-110 hover:fill-white"
          /></a>

          <a  on:click={openMenu}
          
            href="#notifications"
            class="hover:bg-[#2F2F5C] h-14 w-14 rounded-lg flex justify-center items-center"
            ><img
              src="images/notification.svg"
              alt="#"
              class="hover:scale-110 hover:fill-white"
          /></a>

          <a  on:click={openMenu}
          
            href="#downloads"
            class="hover:bg-[#2F2F5C] h-14 w-14 rounded-lg flex justify-center items-center"
            ><img
              src="images/download.svg"
              alt="#"
              class="hover:scale-110 hover:fill-white"
          /></a>

          <a  on:click={openMenu}
          
            href="#settings"
            class="hover:bg-[#2F2F5C] h-14 w-14 rounded-lg flex justify-center items-center"
            ><img
              src="images/settings.svg"
              alt="#"
              class="hover:scale-110 hover:fill-white"
          /></a>
        </nav>
  </aside>
</div>

<!-- Container for Sidebar and Main Content -->
<div class="flex transition-all duration-300 whitespace-nowrap  shadow-2xl" style="width: calc(100% - 6rem);">
  <!-- Second Box (Sidebar) -->
  <div class="bg-purplevol-1000 h-full transform sidebar-transition flex flex-col rounded-tr-[20px] rounded-br-[20px]" style={`width: ${slideOpen ? '250px' : '0'}; overflow:hidden;`}>
    <!-- popout slide -->
    <div class="p-4 text-white">
      <div
    class="h-[100vh] w-[236px] bg-[#1D1D41] absolute rounded-tr-[20px] rounded-br-[20px] ml-[100px] "
      id="popoutNav"
    >
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div on:click={closeMenu}
        class="absolute w-5 h-14 right-0 top-7 flex justify-center items-center bg-[#2F2F5C] rounded-tl-[14px] rounded-bl-[14px]"
        id="closeSidePopout"
      >
        <img src="images/backsingle.svg" alt="close arrow" />
      </div>
      {#each info as item}
      <div class=" hidden target:block " id={item.id} >
        
          <div class="ml-12 mt-[46px]">
            <p class=" text-20 font-bold text-white mx-auto ">{item.heading}</p>
          </div>
          <div class="ml-7 mt-[86px] flex flex-col h-[193px] gap-1">
            <a href="/"  class="text-16 text-white font-bold hover:bg-purplevol-400  rounded-2xl  pl-5 py-5  max-w-[180px]">{item.type}</a>
            <a href="/"  class="text-16 text-white font-bold hover:bg-purplevol-400  rounded-2xl  pl-5 py-5  max-w-[180px]">{item.kind}</a>
            <a href="/"  class="text-16 text-white hover:bg-purplevol-400 rounded-2xl  pl-5 py-5  max-w-[180px]">subscription</a>
          </div>
  
      </div>
      {/each}  
    </div>
    </div>
  </div>

  <!-- Third Box (Remaining Content) -->
  <div class="flex-1 px-4 transition-all duration-300 text-white flex justify-between" style={`margin-left: ${slideOpen ? '0px' : '0'}`}>
    <section class=" h-[100vh] flex-1  mx-auto ">
      <a href="/" class="text-[#EAE9FD] font-thin text-14 flex items-baseline gap-2">
        Orders<img src="images/forwardSingle.svg" alt="3" />
      </a>
      <div class="flex justify-between items-center w-full">
        <p class="text-white text-30 leading-9 font-semibold">Active Orders</p>
        <a href="/"
          class="text-[#EAE9FD] font-thin text-14 flex items-center gap-2 px-8 py-4 bg-purplevol-400 rounded-xl"
        >
          <img src="images/plus.svg" alt="plus" /> New Order
        </a>
      </div>
      <div class="flex gap-6 items-center">
        <div
          class="bg-purplevol-1000 w-[250px] h-[116px] flex items-center justify-center rounded-[20px]"
        >
          <div class="flex gap-5 justify-start ml-6 w-full items-center">
            <div
              class="h-16 w-16 bg-greenLight flex items-center justify-center rounded-2xl"
            >
              <img src="images/tick(Stroke) (1).svg" alt="tick" />
            </div>
            <div class="">
              <p
                class="text-12 font-semibold tracking-[7%] uppercase text-[#8C89B4] w-20"
              >
                Orders Confirmed
              </p>
              <p class="text-32 font-bold text-white leading-7">500</p>
            </div>
          </div>
        </div>
        <div
          class="bg-purplevol-1000 w-[250px] h-[116px] flex items-center justify-center rounded-[20px]"
        >
          <div class="flex gap-5 justify-start ml-6 w-full items-center">
            <div
              class="h-16 w-16 bg-orangeLight flex items-center justify-center rounded-2xl"
            >
              <img src="images/dots.svg" alt="tick" class="hover:stroke-red-600" />
            </div>
            <div class="">
              <p
                class="text-12 font-semibold tracking-[7%] uppercase text-[#8C89B4] w-20 text-nowrap"
              >
                Pending Orders <br />Confirmed
              </p>
              <p class="text-32 font-bold text-white leading-7">500</p>
            </div>
          </div>
        </div>
      </div>

      <!-- input fields -->
      <div class="flex gap-4 mt-7">
        <div
          class="bg-purplevol-1000 rounded-xl overflow-hidden shadow-lg flex-1"
        >
          <div class="flex items-center justify-between px-4 py-2">
            <img src="images/Search Icon.svg" alt="searchInput" />
            <input
              type="search"
              placeholder="Search for name, email, product, variant, SKU, or coupon code...."
              class="w-full py-2 px-4 outline-none focus:ring-2 focus:ring-blue-500 rounded-lg bg-purplevol-1000 placeholder-purplevol-700"
              id="searchInput"
            />
          </div>
        </div>
        <div
          class="max-w-max mx-auto rounded-xl flex-1 py-2 px-4 bg-purplevol-900"
        >
          <input
            type="date"
            id="datepicker"
            name="datepicker"
            class="block w-full px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-purplevol-900 text-white"
            img
          />
        </div>
        <div
          class="max-w-max mx-auto rounded-xl flex-1 py-5 px-4 bg-purplevol-900 flex items-center justify-between gap-3"
        >
          <img src="images/vertical-lines.svg" alt="lines" />
          <p class="text-14 text-white">Filter</p>
        </div>
        <div
          class="max-w-max mx-auto rounded-xl flex-1 py-5 px-4 bg-purplevol-900 flex items-center justify-between gap-3"
        >
          <img src="images/horizontal lines.svg" alt="lines" />
          <p class="text-14 text-white">Columns</p>
        </div>
      </div>
      <div
        class="flex justify-evenly bg-purplevol-1000 p-6 mt-5 rounded-3xl flex-wrap"
      >
        <div class="flex flex-col gap-2">
          <h2 class="text-purplevol-500 uppercase tracking-[7%] text-12">
            Order Status
          </h2>
          <div class="bg-purplevol-900 rounded-xl text-white p-4">
            <select
              name="orderStatus"
              id="OrderStatus"
              class="bg-purplevol-900"
            >
              <option value="option1">All</option>
              <option value="option2">Order Confirmed</option>
              <option value="option3">Pending order confirmation</option>
              <optgroup label="Cancellation">
                <option value="option5">Order cancelled</option>
                <option value="option6">Order refunded</option>
                <option value="option7">Refund issued</option>
              </optgroup>
              <optgroup label="Stock Update" class="text-red-500">
                <option value="option8">Pending stock deduction</option>
                <option value="option9">Pending stock revert</option>
                <option value="option10">Stock reverted</option>
              </optgroup>
            </select>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="text-purplevol-500 uppercase tracking-[7%] text-12">
            Shipment Status
          </h2>
          <div class="bg-purplevol-900 rounded-xl text-white p-4">
            <select
              name="shipmentStatus"
              id="shipmentStatus"
              class="bg-purplevol-900 rounded-xl text-white"
            >
              <option value="option1">All</option>
              <option value="option2">Shipment Delivered</option>
              <option value="option3">Shipment Cancelled</option>
              <option value="option4">Shipment Generated</option>
              <option value="option5">Shipment Generation Error</option>
              <option value="option6">Shipment Shipped</option>
              <option value="option7">Shipment in rewiew</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="text-purplevol-500 uppercase tracking-[7%] text-12">
            Payment Status
          </h2>
          <div class="bg-purplevol-900 rounded-xl text-white p-4">
            <select
              name="paymentStatus"
              id="paymentStatus"
              class="bg-purplevol-900 rounded-xl text-white"
            >
              <option value="option1">All</option>
              <option value="option2">Sucessful</option>
              <option value="option3">Pending</option>
              <option value="option4">Failed</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="text-purplevol-500 uppercase tracking-[7%] text-12">
            Payment meathod
          </h2>
          <div class="bg-purplevol-900 rounded-xl text-white p-4">
            <select
              name="paymentMethod"
              id="paymentMethod"
              class="bg-purplevol-900 rounded-xl text-white"
            >
              <option value="option1">All</option>
              <option value="option2">COD(cash on delivery)</option>
              <option value="option3">Credit Card</option>
              <option value="option4">Debit Card</option>
              <option value="option5">Net Banking</option>
              <option value="option6">Wallet</option>
              <option value="option7">Paytm</option>
              <option value="option8">UPI</option>
            </select>
          </div>
        </div>
      </div>

      <div class="bg-purplevol-1000 mt-5 px-5 py-6 rounded-3xl ">
        <div class="flex justify-evenly items-center pb-5 border-b-[0.5px] border-purplevol-800">
          <div  class="flex gap-5 text-12 font-semibold tracking-[7%] uppercase text-purplevol-500 text-left w-[25%]"
          >
            Order Number <img src="images/upArrow.svg" alt="up" /></div>
          <div      class="text-12 font-semibold tracking-[7%] uppercase text-purplevol-500 text-left w-[25%]"
          >
            Customer Name</div>
          <div  class="flex gap-5 text-12 font-semibold tracking-[7%] uppercase text-purplevol-500 text-left w-[25%]"
          >
            Order date <img src="images/upArrow.svg" alt="up" /></div>
          <div   class="text-12 font-semibold tracking-[7%] uppercase text-purplevol-500 text-left w-[25%]"
          >
            Status</div>
        </div>
            <div class="h-[280px] justify-center items-center flex flex-col flex-wrap overflow-x-scroll snap-x snap-center snap-always">
              <Status/>
            </div>
        
        <div class="flex gap-10 items-center">
          <p class="text-purplevol-500 mt-5 text-12 font-medium">
            1 - 10 of 200
          </p>
          <div
            class="flex items-center justify-center gap-3 text-purplevol-500 mt-5 text-12 font-medium"
          >
            <p class="text-purplevol-500 text-12 font-medium">Display</p>
            <div class="bg-purplevol-900 rounded-lg">
              <!-- dropdown custom -->
              <DropDown/>
    
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
</div>