<template lang="pug">
.screen
  .container
    h2 SQL Formatter

  .container(uk-grid)
    .uk-width-3-4
      textarea#src.uk-textarea.block(v-model="src")

      .uk-margin.centering
        button#format.uk-button.uk-button-primary(@click="execute" v-bind:disabled="loading") Format

      .uk-position-relative
        .uk-card.uk-card-default.uk-card-small.uk-card-body.uk-margin
          pre#dest
            code {{ dest }}
        copy-to-clipboard(target="#dest")

    .uk-width-1-4
      .options-header Options
      form.uk-form-stacked
        .uk-margin
          .uk-form-label インデント
          .uk-grid-small.uk-child-width-auto.uk-grid.uk-child-width-expand
            label
              input.uk-radio(type="radio" v-model="indent_width" value="2" name="indent_width")
              span.uk-margin-small-left 2
            label
              input.uk-radio(type="radio" v-model="indent_width" value="4" name="indent_width")
              span.uk-margin-small-left 4
            label
              input.uk-radio(type="radio" v-model="indent_width" value="8" name="indent_width")
              span.uk-margin-small-left 8
        .uk-margin
          .uk-grid-small.uk-child-width-auto.uk-grid
            label
              input.uk-checkbox(type="checkbox" v-model="reindent" name="reindent")
              span.uk-margin-small-left 改行
        .uk-margin
          .uk-grid-small.uk-child-width-auto.uk-grid
            label
              input.uk-checkbox(type="checkbox" v-model="strip_comments" name="strip_comments")
              span.uk-margin-small-left コメント除去
        .uk-margin
          .uk-form-label 識別子
          .uk-form-controls
            select.uk-select(v-model="identifier_case" name="identifier_case")
              option(value="") そのまま
              option(value="upper") 大文字
              option(value="lower" selected) 小文字
              option(value="capitalize") 先頭のみ大文字
        .uk-margin
          .uk-form-label 予約語
          .uk-form-controls
            select.uk-select(v-model="keyword_case" name="keyword_case")
              option(value="") そのまま
              option(value="upper" selected) 大文字
              option(value="lower") 小文字
              option(value="capitalize") 先頭のみ大文字
        // .uk-margin
        //   .uk-form-label Query
        //   .uk-form-controls
        //     pre
        //       code {{ query }}
      .options-header Links
      ul
        li
          a(href="https://sqlformat.org/api/")
            | SQL Formatter API
</template>

<script>
import queryString from 'query-string';
import CopyToClipboard from '@/components/CopyToClipboard';

export default {
  name: 'sql',
  components: {
    CopyToClipboard,
  },
  data() {
    return {
      reindent: true,
      strip_comments: false,
      identifier_case: 'lower',
      keyword_case: 'upper',
      indent_width: 2,
      src: '',
      dest: '',
      loading: false,
    };
  },
  computed: {
    query() {
      const ri = this.reindent;
      const sc = this.strip_comments;
      const ic = this.identifier_case;
      const kc = this.keyword_case;
      const iw = this.indent_width;
      const d = {
        sql: this.src,
        reindent: ri ? 1 : 0,
        indent_width: Number(iw),
        identifier_case: ic,
        keyword_case: kc,
        strip_comments: sc ? 1 : 0,
      };
      if (ic === '') {
        delete d.identifier_case;
      }
      if (kc === '') {
        delete d.keyword_case;
      }
      if (!ri || iw <= 0) {
        delete d.indent_width;
      }
      return d;
    },
  },
  mounted() {
    // console.log('mounted.');
    this.src = `SELECT r.last_name,
       (SELECT MAX(YEAR(championship_date))
          FROM champions AS c
         WHERE c.last_name = r.last_name
           AND c.confirmed = 'Y') AS last_championship_year
  FROM riders AS r
 WHERE r.last_name IN
       (SELECT c.last_name
          FROM champions AS c
         WHERE YEAR(championship_date) > '2008'
           AND c.confirmed = 'Y');`;
  },
  methods: {
    execute() {
      // https://sqlformat.org/api/
      this.loading = true;
      fetch('https://sqlformat.org/api/v1/format', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        method: 'POST',
        body: queryString.stringify(this.query),
      }).then(res => res.json()).then((json) => {
        this.loading = false;
        this.dest = json.result;
      }).catch((ex) => {
        this.dest = ex.toString();
      });
    },
    makeFormData(data) {
      const fd = new FormData();
      Object.keys(data).forEach((key) => {
        fd.append(key, data[key]);
      });
      return fd;
    },
  },
};
</script>

<style lang="stylus" scoped>
.screen {
  font-size: 16px;
}

input, select {
  font-size: 16px;
}

.block {
  display: block;
  width: 100%;
}

#src, #dest {
  font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
  font-size: 12px;
}

#src {
  height: 150px;
}

#dest
  height: 300px;
  padding: 5px;
  border: 0;
  overflow-x: scroll;

.options-header
  font-size 14px
  margin-bottom 15px
  padding 8px 0
  font-size 12px
  border-bottom 1px solid #e5e5e5

.centering {
  text-align: center;
}

[disabled],
[disabled]:hover {
  background: gray;
  cursor: not-allowed;
}
</style>
