<template>
  <PageLayout
    title="Manage Permissions"
    :table-headers="tableHeaders"
    :loading="loadingData"
    :per-page="request.per_page"
    :pagination="pagination"
    create-title="Create permission"
  >
    <template #table-content>
      <tr v-for="record in records" :key="record.id" class="max-h-10">
        <td class="table-cell">
          {{ record.id }}
        </td>
        <td class="table-cell">
          {{ record.name }}
        </td>

        <td class="table-cell">
          {{ record.guard_name }}
        </td>
        <td class="table-cell">
          <ul>
            <li v-for="role in record.roles" :key="`role-${role.id}`">
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
              <i class="fa-solid fa-pencil" aria-hidden="true" title="Edit"></i>
            </button>
            <button
              class="btn-delete"
              @click="toggleDeleteModal(record.name, record.id)"
            >
              <i
                class="fa-solid fa-trash-can"
                aria-hidden="true"
                title="Delete"
              ></i>
            </button>
          </div>
        </td>
      </tr>
    </template>
  </PageLayout>
</template>

<script>
import DataTable from '~/mixins/data'

const TABLE_HEADERS = ['ID', 'Name', 'Guard', 'Roles', 'Created at', 'Action']

export default {
  mixins: [DataTable],
  async asyncData({ store }) {
    const request = {
      per_page: 5,
      relationships: ['roles'],
      order_column: 'created_at',
      order_by: 'desc',
      search_columns: ['name', 'guard_name'],
      keyword: '',
    }
    const model = 'permissions'
    await store.dispatch('data/fetchData', {
      model,
      request,
    })
  },
  data() {
    return {
      tableHeaders: TABLE_HEADERS,
    }
  },
}
</script>
