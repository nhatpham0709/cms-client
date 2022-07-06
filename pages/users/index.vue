<template>
  <PageLayout
    title="Manage users"
    :table-headers="tableHeaders"
    :loading="$fetchState.pending"
    :per-page.sync="metaRequest.per_page"
    :meta="meta"
    create-title="Create user"
    @changePage="changePage"
  >
    <template #table-content>
      <tr v-for="record in records" :key="record.id" class="max-h-10">
        <td class="table-cell">
          {{ record.id }}
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
          {{ $moment(record.last_login_at).format('YYYY-MM-DD HH:mm') }}
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
    </template>
  </PageLayout>
</template>

<script>
import DataTable from '~/mixins/data'

const TABLE_HEADERS = [
  'ID',
  'Avatar',
  'Name',
  'Username',
  'Email',
  'Status',
  'Last login at',
  'Last login IP',
  'Created at',
  'Action',
]

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
      tableHeaders: TABLE_HEADERS,
    }
  },
}
</script>
