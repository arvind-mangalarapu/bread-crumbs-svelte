<script>
 let orderData =[
    {
        "order_number": "23934734",
        "customer_name": "Ararav Saxana",
        "order_date": "Fri 26 Apr, 2024 06:31 AM",
        "status": "On Hold"
    },
    {
        "order_number": "865432187",
        "customer_name": "Samantha Johnson",
        "order_date": "Thu 15 May, 2024 03:45 PM",
        "status": "Processing"
    },
    {
        "order_number": "745831290",
        "customer_name": "John Smith",
        "order_date": "Mon 20 May, 2024 10:15 AM",
        "status": "Shipped"
    },
    {
        "order_number": "592874613",
        "customer_name": "Emily Brown",
        "order_date": "Sat 18 May, 2024 08:00 AM",
        "status": "Delivered"
    },
    {
        "order_number": "123456789",
        "customer_name": "Michael Johnson",
        "order_date": "Tue 14 May, 2024 12:30 PM",
        "status": "Cancelled"
    },
    {
        "order_number": "987654321",
        "customer_name": "Sophia Miller",
        "order_date": "Sun 19 May, 2024 05:45 PM",
        "status": "On Hold"
    },
    {
        "order_number": "456789123",
        "customer_name": "Daniel Wilson",
        "order_date": "Wed 22 May, 2024 09:20 AM",
        "status": "Processing"
    },
    {
        "order_number": "876543219",
        "customer_name": "Olivia Davis",
        "order_date": "Fri 17 May, 2024 02:00 PM",
        "status": "Shipped"
    },
    {
        "order_number": "234567891",
        "customer_name": "William Taylor",
        "order_date": "Mon 13 May, 2024 11:10 AM",
        "status": "Delivered"
    },
    {
        "order_number": "345678912",
        "customer_name": "Emma Anderson",
        "order_date": "Thu 23 May, 2024 04:55 PM",
        "status": "Cancelled"
    },
    {
        "order_number": "654321987",
        "customer_name": "James Brown",
        "order_date": "Sat 25 May, 2024 07:30 AM",
        "status": "On Hold"
    },
    {
        "order_number": "789123456",
        "customer_name": "Isabella Martinez",
        "order_date": "Tue 21 May, 2024 01:15 PM",
        "status": "Processing"
    },
    {
        "order_number": "567891234",
        "customer_name": "Jacob Rodriguez",
        "order_date": "Sun 19 May, 2024 10:45 AM",
        "status": "Shipped"
    },
    {
        "order_number": "321987654",
        "customer_name": "Mia Hernandez",
        "order_date": "Wed 15 May, 2024 03:00 PM",
        "status": "Delivered"
    },
    {
        "order_number": "912345678",
        "customer_name": "Alexander Wilson",
        "order_date": "Fri 24 May, 2024 06:25 PM",
        "status": "Cancelled"
    },
    {
        "order_number": "543219876",
        "customer_name": "Ava Gonzalez",
        "order_date": "Mon 20 May, 2024 12:50 PM",
        "status": "On Hold"
    },
    {
        "order_number": "456789012",
        "customer_name": "Ethan Brown",
        "order_date": "Thu 16 May, 2024 09:40 AM",
        "status": "Processing"
    },
    {
        "order_number": "654321098",
        "customer_name": "Charlotte Lee",
        "order_date": "Sat 18 May, 2024 04:15 PM",
        "status": "Shipped"
    },
    {
        "order_number": "543210987",
        "customer_name": "Benjamin Taylor",
        "order_date": "Tue 14 May, 2024 08:20 AM",
        "status": "Delivered"
    },
    {
        "order_number": "098765432",
        "customer_name": "Amelia White",
        "order_date": "Sun 26 May, 2024 02:35 PM",
        "status": "Cancelled"
    },
    {
        "order_number": "789012345",
        "customer_name": "Daniel Moore",
        "order_date": "Mon 27 May, 2024 10:00 AM",
        "status": "On Hold"
    },
    {
        "order_number": "890123456",
        "customer_name": "Ella Martin",
        "order_date": "Thu 30 May, 2024 01:45 PM",
        "status": "Processing"
    },
    {
        "order_number": "345678901",
        "customer_name": "Henry Davis",
        "order_date": "Fri 31 May, 2024 05:20 PM",
        "status": "Shipped"
    },
    {
        "order_number": "456789012",
        "customer_name": "Liam Martinez",
        "order_date": "Sat 01 Jun, 2024 09:00 AM",
        "status": "Delivered"
    },
    {
        "order_number": "567890123",
        "customer_name": "Avery Thompson",
        "order_date": "Sun 02 Jun, 2024 11:10 AM",
        "status": "Cancelled"
    },
    {
        "order_number": "678901234",
        "customer_name": "Chloe Harris",
        "order_date": "Mon 03 Jun, 2024 03:45 PM",
        "status": "On Hold"
    },
    {
        "order_number": "789012345",
        "customer_name": "Wyatt Clark",
        "order_date": "Thu 06 Jun, 2024 08:30 AM",
        "status": "Processing"
    },
    {
        "order_number": "890123456",
        "customer_name": "Evelyn Scott",
        "order_date": "Fri 07 Jun, 2024 12:15 PM",
        "status": "Shipped"
    },
    {
        "order_number": "901234567",
        "customer_name": "Noah Green",
        "order_date": "Sat 08 Jun, 2024 03:40 PM",
        "status": "Delivered"
    },
    {
        "order_number": "012345678",
        "customer_name": "Mason Phillips",
        "order_date": "Sun 09 Jun, 2024 06:00 AM",
        "status": "Cancelled"
    },
    {
        "order_number": "123456789",
        "customer_name": "Harper Rivera",
        "order_date": "Mon 10 Jun, 2024 10:20 AM",
        "status": "On Hold"
    },
    {
        "order_number": "234567890",
        "customer_name": "Evelyn Cooper",
        "order_date": "Thu 13 Jun, 2024 01:30 PM",
        "status": "Processing"
    },
    {
        "order_number": "345678901",
        "customer_name": "Elijah Reed",
        "order_date": "Fri 14 Jun, 2024 04:45 PM",
        "status": "Shipped"
    },
    {
        "order_number": "456789012",
        "customer_name": "Abigail Hughes",
        "order_date": "Sat 15 Jun, 2024 08:10 AM",
        "status": "Delivered"
    },
    {
        "order_number": "567890123",
        "customer_name": "Mila Bell",
        "order_date": "Sun 16 Jun, 2024 11:25 AM",
        "status": "Cancelled"
    },
    {
        "order_number": "678901234",
        "customer_name": "Jameson Price",
        "order_date": "Mon 17 Jun, 2024 03:55 PM",
        "status": "On Hold"
    },
    {
        "order_number": "789012345",
        "customer_name": "Scarlett Carter",
        "order_date": "Thu 20 Jun, 2024 06:40 AM",
        "status": "Processing"
    },
    {
        "order_number": "890123456",
        "customer_name": "Ezra Gray",
        "order_date": "Fri 21 Jun, 2024 10:15 AM",
        "status": "Shipped"
    },
    {
        "order_number": "901234567",
        "customer_name": "Lucas Hayes",
        "order_date": "Sat 22 Jun, 2024 01:50 PM",
        "status": "Delivered"
    },
    {
        "order_number": "987654321",
        "customer_name": "Lily Ward",
        "order_date": "Sun 23 Jun, 2024 04:55 PM",
        "status": "Cancelled"
    },
    {
        "order_number": "876543210",
        "customer_name": "Aiden Russell",
        "order_date": "Mon 24 Jun, 2024 08:20 AM",
        "status": "On Hold"
    },
    {
        "order_number": "765432109",
        "customer_name": "Ariana Fisher",
        "order_date": "Thu 27 Jun, 2024 11:45 AM",
        "status": "Processing"
    },
    {
        "order_number": "654321098",
        "customer_name": "Grayson Brooks",
        "order_date": "Fri 28 Jun, 2024 02:55 PM",
        "status": "Shipped"
    },
    {
        "order_number": "543210987",
        "customer_name": "Levi Morgan",
        "order_date": "Sat 29 Jun, 2024 06:30 AM",
        "status": "Delivered"
    }
]



function removeItem(index) {
    orderData = orderData.filter((_, i) => i !== index);
}

function getStatusColor(status) {
        switch (status) {
            case 'Cancelled':
                return 'bg-red-500';
            case 'On Hold':
                return 'bg-blue-500';
            case 'Pending':
                return 'bg-yellow-500';
            case 'Shipped':
                return 'bg-green-500';
            case 'Delivered':
                return 'bg-green-700';
            default:
                return 'bg-gray-500';
        }
    }

let buttonVisible = false;

function showButton(){
    buttonVisible = true;
}

</script>

<style>
    .cancel-btn {
        display: none;
    }
    .order-item:hover .cancel-btn {
        display: inline-block;
    }
</style>

{#each orderData as item, index}
<div class="w-full hover:bg-purplevol-900 order-item">
    <div class="h-[45px] border-b-[0.5px] border-purplevol-800 text-14 flex justify-evenly items-center text-white">
        <p class="text-left w-1/4 ">{item.order_number}</p>
        <p class="text-left w-1/4 ">{item.customer_name}</p>
        <p class="text-left w-1/4 ">{item.order_date}</p>
        <div class="flex items-center justify-start gap-2 text-left w-1/4 ">
            <div class={`h-3 w-3 rounded-full ${getStatusColor(item.status)}`}></div>
            {item.status}
        </div>
        <button 
            class="text-12 border border-white rounded-md py-1.5 px-5 cancel-btn "
            on:click={() => removeItem(index)}>
            Cancel
        </button>
    </div>
</div>
{/each}



