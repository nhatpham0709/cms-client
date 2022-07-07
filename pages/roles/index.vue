<template>
  <PageLayout
    title="Manage Roles"
    :table-headers="tableHeaders"
    :loading="$fetchState.pending"
    :per-page.sync="metaRequest.per_page"
    :meta="meta"
    create-title="Create role"
    @changePage="changePage"
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
              <i class="fa-solid fa-pencil" aria-hidden="true"></i>
            </button>
            <button class="btn-delete">
              <i class="fa-solid fa-trash-can" aria-hidden="true"></i>
            </button>
          </div>
        </td>
      </tr>
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
  data() {
    return {
      model: 'roles',
      metaRequest: {
        per_page: 5,
        relationships: ['permissions'],
        order_column: 'created_at',
        order_by: 'desc',
        search_columns: [],
        keyword: '',
      },
      tableHeaders: TABLE_HEADERS,
    }
  },
}
</script>
