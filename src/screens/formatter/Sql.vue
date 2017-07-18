<template lang="pug">
.screen
  .container
    h2 SQL Formatter

    .row
      .three.columns
        label
          input(type="checkbox" v-model="reindent" name="reindent")
          span 改行
        label インデント
        .row
          .one-third.column
            label
              input(type="radio" v-model="indent_width" value="2" name="indent_width")
              span 2
          .one-third.column
            label
              input(type="radio" v-model="indent_width" value="4" name="indent_width")
              span 4
          .one-third.column
            label
              input(type="radio" v-model="indent_width" value="8" name="indent_width")
              span 8
        label
          input(type="checkbox" v-model="strip_comments" name="strip_comments")
          span コメント除去
        label 識別子
        select.block(v-model="identifier_case" name="identifier_case")
          option(value="") そのまま
          option(value="upper") 大文字
          option(value="lower" selected) 小文字
          option(value="capitalize") 先頭のみ大文字
        label 予約語
        select.block(v-model="keyword_case" name="keyword_case")
          option(value="") そのまま
          option(value="upper" selected) 大文字
          option(value="lower") 小文字
          option(value="capitalize") 先頭のみ大文字

      .nine.columns
        textarea#src.block(v-model="src")

        .centering
          button#format.button-primary(@click="execute" v-bind:disabled="loading") Format

        pre#dest {{ dest }}

  global-footer
</template>

<script>
import GlobalFooter from '@/components/GlobalFooter';
import queryString from 'query-string';

export default {
  name: 'sql',
  components: {
    GlobalFooter,
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

#dest {
  min-height: 250px;
  padding: 5px;
  background-color: #f5f5f5;
}

.centering {
  text-align: center;
}

[disabled],
[disabled]:hover {
  background: gray;
  cursor: not-allowed;
}
</style>
