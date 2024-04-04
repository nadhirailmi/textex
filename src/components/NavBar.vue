<template>

    <section class="flex bg-primary1 text-white justify-between px-10 fixed top-0 left-0 right-0 py-1 md:h-auto h-24 z-50">

        <img src="/asset/logologonaji.jpg" alt="logo" class="md:w-40 w-[30%]  my-auto">

        <div class="hidden md:block align-middle my-auto w-[700px]">

            <ul class="flex font-medium justify-between">
                <li class="hover:border-b-2 transition-transform duration-1000 cursor-pointer"><a href="#about">Tentang Kami</a></li>
                <li class="hover:border-b-2 transition-transform duration-1000 cursor-pointer"><a href="#datai">Data</a></li>
                <li class="hover:border-b-2 transition-transform duration-1000 cursor-pointer"><a href="#join">Menjadi Relawan</a></li>
                <li class="hover:border-b-2 transition-transform duration-1000 cursor-pointer"><a href="#contact">Kontak Kami</a></li>
            </ul>

        </div>

        <!-- hamburger -->
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-primary1 focus:outline-none focus:ring-2 focus:ring-primary1 dark:text-white dark:hover:bg-primary1 dark:focus:ring-white my-auto" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
        </button>

    </section>

    <div id="navbar-default" class="hidden md:hidden w-full md:w-auto fixed bg-white top-24">
            <ul class="mx-5 text-base text-primary1 py-4">
                <li class="py-2 hover:bg-slate-200 rounded-md"><a href="#about" class="ml-2">Tentang Kami</a></li>
                <li class="py-2 hover:bg-slate-200 rounded-md"><a href="#datai" class="ml-2">Data</a></li>
                <li class="py-2 hover:bg-slate-200 rounded-md"><a href="#join" class="ml-2">Menjadi Relawan</a></li>
                <li class="py-2 hover:bg-slate-200 rounded-md"><a href="#contact" class="ml-2">Kontak Kami</a></li>
            </ul>
    </div>

</template>