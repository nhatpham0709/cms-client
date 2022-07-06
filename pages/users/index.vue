<template>
  <PageLayout title="Manage users">
    <template #content>
      <div class="flex justify-between">
        <select
          v-model="metaRequest.per_page"
          class="h-full rounded-l border block appearance-none bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          @change="getData"
        >
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>
        <button
          class="btn-add"
        >
          Create User
        </button>
      </div>
      <div class="flex flex-col mt-5">
        <div class="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div
            class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 sm:rounded-lg"
          >
            <table class="min-w-full">
              <thead>
                <tr class="border-t-2">
                  <th class="table-header">ID</th>
                  <th class="table-header">Avatar</th>
                  <th class="table-header">Name</th>
                  <th class="table-header">Username</th>
                  <th class="table-header">Email</th>
                  <th class="table-header">Status</th>
                  <th class="table-header">Last login at</th>
                  <th class="table-header">Last login IP</th>
                  <th class="table-header">Created at</th>
                  <th class="table-header text-center" colspan="3">Action</th>
                </tr>
              </thead>

              <tbody class="bg-white">
                <tr v-for="record in records" :key="record.id">
                  <td class="table-cell">
                    <div class="flex items-center">{{ record.id }}</div>
                  </td>

                  <td class="table-cell">
                    <img
                      :src="record.avatar"
                      :alt="record.full_name"
                      class="rounded w-10 h-10"
                    />
                  </td>

                  <td class="table-cell">
                    {{ record.full_name }}
                  </td>

                  <td class="table-cell">
                    {{ record.username }}
                  </td>
                  <td class="table-cell">
                    {{ record.email }}
                  </td>
                  <td class="table-cell">
                    {{ record.status }}
                  </td>
                  <td class="table-cell">
                    {{
                      $moment(record.last_login_at).format('YYYY-MM-DD HH:mm')
                    }}
                  </td>
                  <td class="table-cell">
                    {{ record.last_login_ip }}
                  </td>
                  <td class="table-cell">
                    {{ $moment(record.created_at).format('YYYY-MM-DD HH:mm') }}
                  </td>
                  <td class="table-cell">
                    <div class="flex">
                      <button class="btn-edit">
                        <i class="fa-solid fa-pencil" aria-hidden="true"></i>
                      </button>
                      <button class="btn-delete">
                        <i class="fa-solid fa-trash-can" aria-hidden="true"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <Pagination
              :to="meta.to"
              :from="meta.from"
              :total="meta.total"
              :total-pages="meta.totalPages"
              :current-page="meta.currentPage"
              :max-pages="5"
              @changePage="changePage"
            />
          </div>
        </div>
      </div>
    </template>
  </PageLayout>
</template>

<script>
import DataTable from '@/mixins/table'

export default {
  mixins: [DataTable],
  data() {
    return {
      model: 'users',
      metaRequest: {
        per_page: 5,
        relationships: ['roles'],
        order_column: 'created_at',
        order_by: 'desc',
        search_columns: ['first_name', 'last_name'],
        keyword: '',
      },
    }
  },
}
</script>
