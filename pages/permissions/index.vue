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
        <button class="btn-add">Create User</button>
      </div>
      <div class="flex flex-col mt-5">
        <div class="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div
            class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg"
          >
            <table class="min-w-full">
              <thead>
                <tr>
                  <th class="table-header">ID</th>
                  <th class="table-header">Name</th>
                  <th class="table-header">Guard</th>
                  <th class="table-header">Roles</th>
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
                    {{ record.name }}
                  </td>

                  <td class="table-cell">
                    {{ record.guard_name }}
                  </td>
                  <td class="table-cell">
                    <ul>
                      <li
                        v-for="role in record.roles"
                        :key="`role-${role.id}`"
                      >
                        {{ role.name }}
                      </li>
                    </ul>
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
      model: 'permissions',
      metaRequest: {
        per_page: 5,
        relationships: ['roles'],
        order_column: 'created_at',
        order_by: 'desc',
        search_columns: [],
        keyword: '',
      },
    }
  },
}
</script>
