<template>
  <div class="flex flex-wrap md:grid md:grid-cols-3 gap-10 px-6">
    <div class="md:col-span-2 rounded-3xl bg-gray-50 dark:bg-gray-800">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg border-0"
      >
        <div class="rounded-t mb-0 px-6 py-6">
          <div class="text-center flex justify-between">
            <h6 class="text-xl font-bold">Profile</h6>
            <div class="flex">
              <Button
                v-if="readonly"
                type="green"
                content="Edit"
                @click="toggleEdit"
              />
              <Button
                v-if="!readonly"
                type="primary"
                content="Submit"
                @click="submit"
              />
              <Button
                v-if="!readonly"
                type="dark"
                content="Cancel"
                @click="readonly = true"
              />
            </div>
          </div>
        </div>
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 class="text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label class="block uppercase text-xs font-bold mb-2">
                    Username
                  </label>
                  <input
                    v-model="user.username"
                    :readonly="readonly"
                    type="text"
                    class="input"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label class="block uppercase text-xs font-bold mb-2">
                    Email address
                  </label>
                  <input
                    v-model="user.email"
                    :readonly="readonly"
                    type="text"
                    class="input"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label class="block uppercase text-xs font-bold mb-2">
                    First Name
                  </label>
                  <input
                    ref="firstName"
                    v-model="user.first_name"
                    :readonly="readonly"
                    type="text"
                    class="input"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4">
                <div class="relative w-full mb-3">
                  <label class="block uppercase text-xs font-bold mb-2">
                    Last Name
                  </label>
                  <input
                    v-model="user.last_name"
                    :readonly="readonly"
                    type="text"
                    class="input"
                  />
                </div>
              </div>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
            <h6 class="text-sm mt-3 mb-6 font-bold uppercase">
              Contact Information
            </h6>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-12/12 px-4">
                <div class="relative w-full mb-3">
                  <label class="block uppercase text-xs font-bold mb-2">
                    Address
                  </label>
                  <input
                    v-model="user.address"
                    :readonly="readonly"
                    type="text"
                    class="input"
                  />
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3">
                  <label class="block uppercase text-xs font-bold mb-2">
                    City
                  </label>
                  <input
                    v-model="user.address"
                    :readonly="readonly"
                    type="text"
                    class="input"
                  />
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3">
                  <label class="block uppercase text-xs font-bold mb-2">
                    Country
                  </label>
                  <input
                    v-model="user.address"
                    :readonly="readonly"
                    type="text"
                    class="input"
                  />
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <div class="relative w-full mb-3">
                  <label class="block uppercase text-xs font-bold mb-2">
                    Postal Code
                  </label>
                  <input
                    v-model="user.address"
                    :readonly="readonly"
                    type="text"
                    class="input"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 rounded-3xl dark:bg-gray-800">
      <div
        class="relative flex flex-col min-w-0 break-words bg-gray-50 dark:bg-gray-800 w-full mb-6 rounded-lg mt-16"
      >
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full px-4 flex justify-center">
              <div class="relative">
                <NuxtImg
                  class="w-20 h-auto mt-10"
                  :src="user.avatar"
                  :alt="user.full_name"
                />
              </div>
            </div>
            <div class="w-full px-4 text-center mt-5">
              <div class="flex justify-center py-4 lg:pt-4 pt-8">
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide">
                    22
                  </span>
                  <span class="text-sm">Friends</span>
                </div>
                <div class="mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide">
                    10
                  </span>
                  <span class="text-sm">Photos</span>
                </div>
                <div class="lg:mr-4 p-3 text-center">
                  <span class="text-xl font-bold block uppercase tracking-wide">
                    89
                  </span>
                  <span class="text-sm">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-12">
            <h3 class="text-xl font-semibold leading-normal mb-2">
              {{ user.full_name }}
            </h3>
            <div class="text-sm leading-normal mt-0 mb-2 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-lg"></i>
              {{ user.address }}
            </div>
            <div class="mb-2 mt-10">
              <i class="fas fa-briefcase mr-2 text-lg"></i>
              Solution Manager - Creative Tim Officer
            </div>
            <div class="mb-2">
              <i class="fas fa-university mr-2 text-lg"></i>
              University of Computer Science
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      readonly: true,
    }
  },
  computed: {
    user() {
      return { ...this.$auth.user }
    },
  },
  methods: {
    toggleEdit() {
      this.readonly = false
      this.$refs.firstName.focus()
    },
    submit() {
      // console.log(321123231)
    },
  },
}
</script>
