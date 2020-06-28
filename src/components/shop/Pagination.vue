<template>
    <div>
        <nav aria-label="page-navigation-example" class="page-navigation-example">
        <ul class="pagination">
          <li class="page-item">
            <button
              type="button"
              class="page-link"
              :disabled="$store.state.page == 1"
              @click="changePostsPerPage($store.state.page - 1)"
            >
              {{ $t("mostWanted.prev") }}
            </button>
          </li>
          <li
            class="page-item"
            :key="pageNumber"
            v-for="pageNumber in paginationPages"
          >
            <button
              :disabled="pageNumber === '...'"
              type="button"
              :class="$store.state.page == pageNumber ? 'active' : ''"
              class="page-link"
              @click="changePostsPerPage(pageNumber)"
            >
              {{ pageNumber }}
            </button>
          </li>
          <li class="page-item">
            <button
              type="button"
              :disabled="$store.state.page >= $store.state.totalPages"
              @click="changePostsPerPage($store.state.page + 1)"
              class="page-link"
            >
              {{ $t("mostWanted.next") }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
</template>

<script>
export default {
    computed: {
        paginationPages() {
        const { page, totalPages } = this.$store.state;
        // return this.$store.state.pages;
        return this.pagination(page, totalPages);
        }
    },
    methods: {
        changePostsPerPage(currentPage) {
            this.$store.state.page = currentPage;
            this.$store.commit("paginate");
        },
        pagination(c, m) {
            var current = c,
            last = m,
            delta = 1,
            left = current - delta,
            right = current + delta + 1,
            range = [],
            rangeWithDots = [],
            l;

            for (let i = 1; i <= last; i++) {
                if (i == 1 || i == last || (i >= left && i < right)) {
                range.push(i);
                }
            }

            for (let i of range) {
                if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l !== 1) {
                    rangeWithDots.push("...");
                }
                }
                rangeWithDots.push(i);
                l = i;
            }

            return rangeWithDots;
        }
    }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>