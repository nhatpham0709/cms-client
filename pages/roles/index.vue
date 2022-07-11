<template>
  <PageLayout
    title="Manage Roles"
    :table-headers="tableHeaders"
    :loading="loadingData"
    :per-page="request.per_page"
    :pagination="pagination"
    create-title="Create Role"
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
            <li
              v-for="permission in record.permissions"
              :key="`permission-${permission.id}`"
            >
              {{ permission.name }}
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
              title="Delete"
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
    <template #modal>
      <Modal ref="createModal" :title="modalTitle">
        <template #content>
          <form ref="form">
            <div class="mb-6">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Role name</label
              >
              <input v-model="form.name" type="text" class="input" />
            </div>
            <div class="mb-6">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Permissions</label
              >
              <select v-model="form.permissions" multiple class="input">
                <option
                  v-for="permission in permissions"
                  :key="`permission-${permission.id}`"
                >
                  {{ permission.name }}
                </option>
              </select>
            </div>
          </form>
        </template>
      </Modal>
    </template>
  </PageLayout>
</template>

<script>
import DataTable from '~/mixins/data'

const TABLE_HEADERS = [
  'ID',
  'Name',
  'Guard',
  'Permissions',
  'Created at',
  'Action',
]

export default {
  mixins: [DataTable],
  async asyncData({ store, app }) {
    const request = {
      per_page: 5,
      relationships: ['permissions'],
      order_column: 'created_at',
      order_by: 'desc',
      search_columns: ['name', 'guard_name'],
      keyword: '',
    }
    const model = 'roles'
    const res = await app.$api.getAll('permissions')

    await store.dispatch('data/fetchData', { model, request })

    return {
      permissions: res.data,
    }
  },
  data() {
    return {
      tableHeaders: TABLE_HEADERS,
      form: {
        name: '',
        permissions: [],
      },
    }
  },
}
</script>
