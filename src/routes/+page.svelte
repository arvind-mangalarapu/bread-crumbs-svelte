
  <main class="bg-purplevol-1200 flex">
    <div class="flex relative w-[350px]">
      <!-- side nav -->
      <aside
        class="flex flex-col justify-between items-center w-[100px] h-[100vh] bg-purplevol-1000 shadow-custom z-10 absolute"
      >
        <img src="images/logo.svg" alt="logo" class="my-7" />
        <div class="flex flex-col justify-between h-full" id="nav-item1">
          <nav
            class="nav-list flex flex-col justify-evenly items-center h-[588px]"
          >
            <a
              href="#inventory"
              class="hover:bg-[#2F2F5C] h-14 w-14 rounded-lg flex justify-center items-center"
              ><img
                src="images/inventory.svg"
                alt="#"
                class="hover:scale-110 hover:fill-white"
            /></a>

            <a
              href="#customers"
              class="hover:bg-[#2F2F5C] h-14 w-14 rounded-lg flex justify-center items-center"
              ><img
                src="images/customers.svg"
                alt="#"
                class="hover:scale-110 hover:fill-white"
              />
            </a>

            <a
              href="#orders"
              class="hover:bg-[#2F2F5C] h-14 w-14 rounded-lg flex justify-center items-center"
              ><img
                src="images/orders.svg"
                alt="#"
                class="hover:scale-110 hover:fill-white"
            /></a>

            <a
              href="#shipments"
              class="hover:bg-[#2F2F5C] h-14 w-14 rounded-lg flex justify-center items-center"
              ><img
                src="images/shipment.svg"
                alt="#"
                class="hover:scale-110 hover:fill-white"
            /></a>

            <a
              href="#discounts"
              class="hover:bg-[#2F2F5C] h-14 w-14 rounded-lg flex justify-center items-center"
              ><img
                src="images/discount.svg"
                alt="#"
                class="hover:scale-110 hover:fill-white"
            /></a>

            <a
              href="#notifications"
              class="hover:bg-[#2F2F5C] h-14 w-14 rounded-lg flex justify-center items-center"
              ><img
                src="images/notification.svg"
                alt="#"
                class="hover:scale-110 hover:fill-white"
            /></a>

            <a
              href="#downloads"
              class="hover:bg-[#2F2F5C] h-14 w-14 rounded-lg flex justify-center items-center"
              ><img
                src="images/download.svg"
                alt="#"
                class="hover:scale-110 hover:fill-white"
            /></a>

            <a
              href="#settings"
              class="hover:bg-[#2F2F5C] h-14 w-14 rounded-lg flex justify-center items-center"
              ><img
                src="images/settings.svg"
                alt="#"
                class="hover:scale-110 hover:fill-white"
            /></a>
          </nav>
          <div class="mb-7">
            <p
              class="bg-orangeLight p-5 rounded-full inline-block text-white font-sans text-14"
            >
              AM
            </p>
          </div>
        </div>
      </aside>
      <!-- popout nav -->
      <div
        class="h-[100vh] w-[236px] bg-[#1D1D41] absolute hidden rounded-tr-[20px] rounded-br-[20px]"
        id="popoutNav"
      >
        <div
          class="absolute w-5 h-14 right-0 top-7 flex justify-center items-center bg-[#2F2F5C] rounded-tl-[14px] rounded-bl-[14px]"
          id="closeSidePopout"
        >
          <img src="images/backsingle.svg" alt="close arrow" />
        </div>
        <h1
          class="text-20 space-x-[10%] text-white mt-6 ml-11 font-bold hidden target:block"
          id="inventory"
        >
          Inventory
        </h1>
        <h1
          class="text-20 space-x-[10%] text-white mt-6 ml-11 font-bold hidden target:block"
          id="customers"
        >
          Customers
        </h1>
        <h1
          class="text-20 space-x-[10%] text-white mt-6 ml-11 font-bold hidden target:block"
          id="orders"
        >
          Orders
        </h1>
        <h1
          class="text-20 space-x-[10%] text-white mt-6 ml-11 font-bold hidden target:block"
          id="shipments"
        >
          Shipments
        </h1>
        <h1
          class="text-20 space-x-[10%] text-white mt-6 ml-11 font-bold hidden target:block"
          id="discounts"
        >
          Discounts
        </h1>
        <h1
          class="text-20 space-x-[10%] text-white mt-6 ml-11 font-bold hidden target:block"
          id="notifications"
        >
          Notifications
        </h1>
        <h1
          class="text-20 space-x-[10%] text-white mt-6 ml-11 font-bold hidden target:block"
          id="downloads"
        >
          Downloads
        </h1>
        <div class="hidden target:block" id="settings">
          <p class="text-20 space-x-[10%] text-white mt-6 ml-11 font-bold">
            Settings
          </p>
        </div>

        <nav
          class="flex flex-col gap-4 justify-center items-center mt-14"
          id="navContainer"
        >
          <div>
            <p
              class="text-16 text-white text-center font-bold hover:bg-purplevol-400 w-48 h-14 flex justify-center items-center rounded-2xl"
            >
              Active orders
            </p>
          </div>
          <div>
            <p
              class="text-16 text-white text-center font-bold hover:bg-purplevol-400 w-48 h-14 flex justify-center items-center rounded-2xl"
            >
              COD orders
            </p>
          </div>
          <div>
            <p
              class="text-16 text-white text-center hover:bg-purplevol-400 w-48 h-14 flex justify-center items-center rounded-2xl"
            >
              subscriptions
            </p>
          </div>
        </nav>
      </div>
    </div>
    <!-- main page -->

    <section class="left-[350px] h-[100vh] flex-1 max-w-[90%] mx-auto p-6">
      <p class="text-[#EAE9FD] font-thin text-14 flex items-baseline gap-2">
        Orders<img src="images/forwardSingle.svg" alt="3" />
      </p>
      <div class="flex justify-between items-center w-full">
        <p class="text-white text-30 leading-9 font-semibold">Active Orders</p>
        <p
          class="text-[#EAE9FD] font-thin text-14 flex items-center gap-2 px-8 py-4 bg-purplevol-400 rounded-xl"
        >
          <img src="images/plus.svg" alt="plus" /> New Order
        </p>
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
              <img src="images/dots.svg" alt="tick" />
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

      <div class="bg-purplevol-1000 mt-5 px-5 py-6 rounded-3xl">
        <!-- <table class="text-white w-[100%] text-left table-auto">
          <tr class="h-[30px] border-b-[0.5px] border-purplevol-800">
            <th
              class="flex gap-5 text-12 font-semibold tracking-[7%] uppercase text-purplevol-500"
            >
              Order Number <img src="images/upArrow.svg" alt="up" />
            </th>
            <th
              class="text-12 font-semibold tracking-[7%] uppercase text-purplevol-500"
            >
              Customer Name
            </th>
            <th
              class="flex gap-5 text-12 font-semibold tracking-[7%] uppercase text-purplevol-500"
            >
              Order date <img src="images/upArrow.svg" alt="up" />
            </th>
            <th
              class="text-12 font-semibold tracking-[7%] uppercase text-purplevol-500"
            >
              Status
            </th>
          </tr>
          <tr class="h-[45px] border-b-[0.5px] border-purplevol-800 text-14">
            <td>289765432</td>
            <td>Aartav Saxena</td>
            <td>Fri 26 Apr, 2024 06:31 am</td>
            <td class="flex items-center justify-start gap-2">
              <div class="bg-orangeDark h-3 w-3 rounded-full"></div>
              On Hold
            </td>
          </tr>
          <tr class="h-[45px] border-b-[0.5px] border-purplevol-800 text-14">
            <td>289765432</td>
            <td>Aartav Saxena</td>
            <td>Fri 26 Apr, 2024 06:31 am</td>
            <td class="flex items-center justify-start gap-2">
              <div class="bg-greenDark h-3 w-3 rounded-full"></div>
              On Hold
            </td>
          </tr>
          <tr class="h-[45px] border-b-[0.5px] border-purplevol-800 text-14">
            <td>289765432</td>
            <td>Aartav Saxena</td>
            <td>Fri 26 Apr, 2024 06:31 am</td>
            <td class="flex items-center justify-start gap-2">
              <div class="bg-orangeDark h-3 w-3 rounded-full"></div>
              On Hold
            </td>
          </tr>
          <tr class="h-[45px] border-b-[0.5px] border-purplevol-800 text-14">
            <td>289765432</td>
            <td>Aartav Saxena</td>
            <td>Fri 26 Apr, 2024 06:31 am</td>
            <td class="flex items-center justify-start gap-2">
              <div class="bg-orangeDark h-3 w-3 rounded-full"></div>
              On Hold
            </td>
          </tr>
          <tr class="h-[45px] border-b-[0.5px] border-purplevol-800 text-14">
            <td>289765432</td>
            <td>Aartav Saxena</td>
            <td>Fri 26 Apr, 2024 06:31 am</td>
            <td class="flex items-center justify-start gap-2">
              <div class="bg-orangeDark h-3 w-3 rounded-full"></div>
              On Hold
            </td>
          </tr>
          <tr class="h-[45px] border-b-[0.5px] border-purplevol-800 text-14">
            <td>289765432</td>
            <td>Aartav Saxena</td>
            <td>Fri 26 Apr, 2024 06:31 am</td>
            <td class="flex items-center justify-start gap-2">
              <div class="bg-blueDark h-3 w-3 rounded-full"></div>
              On Hold
            </td>
          </tr>
          <tr class="h-[45px] border-b-[0.5px] border-purplevol-800 text-14">
            <td>289765432</td>
            <td>Aartav Saxena</td>
            <td>Fri 26 Apr, 2024 06:31 am</td>
            <td class="flex items-center justify-start gap-2">
              <div class="bg-orangeDark h-3 w-3 rounded-full"></div>
              On Hold
            </td>
          </tr>
          <tr class="h-[45px] border-b-[0.5px] border-purplevol-800 text-14">
            <td>289765432</td>
            <td>Aartav Saxena</td>
            <td>Fri 26 Apr, 2024 06:31 am</td>
            <td class="flex items-center justify-start gap-2">
              <div class="bg-orangeDark h-3 w-3 rounded-full"></div>
              On Hold
            </td>
          </tr>
          <tr class="h-[45px] border-b-[0.5px] border-purplevol-800 text-14">
            <td>289765432</td>
            <td>Aartav Saxena</td>
            <td>Fri 26 Apr, 2024 06:31 am</td>
            <td class="flex items-center justify-start gap-2">
              <div class="bg-redDark h-3 w-3 rounded-full"></div>
              On Hold
            </td>
          </tr>
          <tr class="h-[45px] border-b-[0.5px] border-purplevol-800 text-14">
            <td>289765432</td>
            <td>Aartav Saxena</td>
            <td>Fri 26 Apr, 2024 06:31 am</td>
            <td class="flex items-center justify-start gap-2">
              <div class="bg-greenDark h-3 w-3 rounded-full"></div>
              On Hold
            </td>
          </tr>
          <tr class="h-[45px] border-b-[0.5px] border-purplevol-800 text-14">
            <td>289765432</td>
            <td>Aartav Saxena</td>
            <td>Fri 26 Apr, 2024 06:31 am</td>
            <td class="flex items-center justify-start gap-2">
              <div class="bg-orangeDark h-3 w-3 rounded-full"></div>
              On Hold
            </td>
          </tr>
          <tr class="h-[45px] border-b-[0.5px] border-purplevol-800 text-14">
            <td>289765432</td>
            <td>Aartav Saxena</td>
            <td>Fri 26 Apr, 2024 06:31 am</td>
            <td class="flex items-center justify-start gap-2">
              <div class="bg-redDark h-3 w-3 rounded-full"></div>
              On Hold
            </td>
          </tr>
        </table> -->
        <div class="flex gap-10 items-center">
          <p class="text-purplevol-500 mt-5 text-12 font-medium">
            1 - 10 of 200
          </p>
          <div
            class="flex items-center justify-center gap-3 text-purplevol-500 mt-5 text-12 font-medium"
          >
            <p class="text-purplevol-500 text-12 font-medium">Display</p>
            <div class="bg-purplevol-900 px-4 py-2 rounded-lg">
              <select
                name="shipmentStatus"
                id="shipmentStatus"
                class="bg-purplevol-900 text-white"
              >
                <option value="option1">1</option>
                <option value="option2">2</option>
                <option value="option3">3</option>
                <option value="option4">4</option>
                <option value="option5">5</option>
                <option value="option6">6</option>
                <option value="option7">7</option>
                <option value="option8">8</option>
                <option value="option9">9</option>
                <option value="option10">10</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>


<!-- <script>
  document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-list a");
    const popoutSideNav = document.getElementById("popoutNav");
    const closeSidePopout = document.getElementById("closeSidePopout");

    navItems.forEach((navItem) => {
      navItem.addEventListener("click", (e) => {
        popoutSideNav.classList.add(
          "block",
          "ml-[100px]",
          "animate-slide-right"
        );
        popoutSideNav.classList.remove("hidden", "animate-slide-left");
        console.log("Updated Class List:", popoutSideNav.classList);
      });
    });
    closeSidePopout.addEventListener("click", (e) => {
      popoutSideNav.classList.toggle("hidden");
      popoutSideNav.classList.remove("hidden", "animate-slide-right");
      popoutSideNav.classList.add("animate-slide-left");

      console.log("Updated Class List:", popoutSideNav.classList);
    });
  });

  // fetch("index.json")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const navContainer = document.getElementById("navContainer");
  //     data.forEach((item) => {
  //       const div = document.getElementById("navContainer");
  //       div.innerHTML = ` <h1 class="text-20 space-x-[10%] text-white mt-6 ml-11 font-bold">
  //         ${item.heading}
  //       </h1>
  //       <nav
  //         class="flex flex-col gap-4 justify-center items-center mt-14"
  //         id="navContainer"
  //       >
  //         <div>
  //           <p
  //             class="text-16 text-white text-center font-bold hover:bg-purplevol-400 w-48 h-14 flex justify-center items-center rounded-2xl"
  //           >
  //             ${item.type}
  //           </p>
  //         </div>
  //         <div>
  //           <p
  //             class="text-16 text-white text-center font-bold hover:bg-purplevol-400 w-48 h-14 flex justify-center items-center rounded-2xl"
  //           >
  //             ${item.kind}
  //           </p>
  //         </div>
  //         <div>
  //           <p
  //             class="text-16 text-white text-center hover:bg-purplevol-400 w-48 h-14 flex justify-center items-center rounded-2xl"
  //           >
  //      subscription
  //           </p>
  //         </div>
  //       </nav>

  //     `;
  //     });
  //   });
  // const navContainer = document.getElementById("navContainer");
  // const headingDisplay = document.getElementById("headingDisplay");

  // jsonData.forEach((item) => {
  //   const navItem = document.createElement("div");
  //   navItem.innerHTML = `
  //   <p class="text-16 text-white text-center font-bold hover:bg-purplevol-400 w-48 h-14 flex justify-center items-center rounded-2xl" data-id="${item.id}">
  //     ${item.type}
  //   </p>
  // `;
  //   navItem.addEventListener("click", () => {
  //     headingDisplay.textContent = item.heading;
  //   });
  //   navContainer.appendChild(navItem);
  // });
</script> -->
