<template>
  <DashboardProvider>
    <div class="bg-gray-900 h-screen overflow-hidden relative">
      <div class="flex items-start">
        <DashboardProviderOverlay />
        <DashboardSidebar mobile-position="right" />
        <div class="flex flex-col h-screen pl-0 w-full lg:pl-20 lg:space-y-4">
          <DashboardHeader />
          <main
            class="h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:pt-4 lg:pt-0 lg:px-4"
          >
            <slot />
          </main>
        </div>
      </div>
    </div>
  </DashboardProvider>
</template>

<script></script>
