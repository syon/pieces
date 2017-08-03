<template lang="pug">
.screen
  .container
    h2 Checkbox

    .settings-view.
      <div class="control-group"><div class="controls"><div class="checkbox"><label for="core.allowPendingPaneItems"><input id="core.allowPendingPaneItems" type="checkbox" checked><div class="setting-title" title="Allow Pending Pane Items" data-localized="true">プレビュータブを使う</div></label><div class="setting-description" title="Allow items to be previewed without adding them to a pane permanently, such as when single clicking files in the tree view." data-localized="true">ツリービューなどでファイルを選択した時にタブをプレビュー状態で開きます。 プレビュー時はタブ名が斜体となり、別のファイル選択時にタブが使い回されます。 ダブルクリックまたは編集を開始することでプレビュー状態が解除されます。</div></div></div></div>
      <div class="control-group"><div class="controls"><div class="checkbox"><label for="core.audioBeep"><input id="core.audioBeep" type="checkbox" checked><div class="setting-title" title="Audio Beep" data-localized="true">ビープ音を鳴らす</div></label><div class="setting-description" title="Trigger the system's beep sound when certain actions cannot be executed or there are no results." data-localized="true">処理が予期したとおりに実行されなかったり、結果が何も得られなかった場合にシステムのビープ音を鳴らします。</div></div></div></div>
      <div class="control-group"><div class="controls"><div class="checkbox"><label for="core.automaticallyUpdate"><input id="core.automaticallyUpdate" type="checkbox" checked><div class="setting-title" title="Automatically Update" data-localized="true">自動アップデート</div></label><div class="setting-description" title="Automatically update Atom when a new release is available." data-localized="true">新しいバージョンの Atom がリリースされていた場合に自動でアップデートします。</div></div></div></div>
      <div class="control-group"><div class="controls"><div class="checkbox"><label for="core.closeEmptyWindows"><input id="core.closeEmptyWindows" type="checkbox" checked><div class="setting-title" title="Close Empty Windows" data-localized="true">空になったウインドウをタブと同様に閉じる</div></label><div class="setting-description" title="When a window with no open tabs or panes is given the 'Close Tab' command, close that window." data-localized="true">ウインドウ内にタブもペインもない状態でタブを閉じるコマンドを与えた場合、ウインドウを閉じます。</div></div></div></div>
      <div class="control-group"><div class="controls"><div class="checkbox"><label for="core.destroyEmptyPanes"><input id="core.destroyEmptyPanes" type="checkbox" checked><div class="setting-title" title="Remove Empty Panes" data-localized="true">空になったペインを自動的に閉じる</div></label><div class="setting-description" title="When the last tab of a pane is closed, remove that pane as well." data-localized="true">最後に開いていたタブを閉じた場合、ペインも閉じます。</div></div></div></div>
      <div class="control-group"><div class="controls"><div class="checkbox"><label for="core.excludeVcsIgnoredPaths"><input id="core.excludeVcsIgnoredPaths" type="checkbox" checked><div class="setting-title" title="Exclude VCS Ignored Paths" data-localized="true">バージョン管理システムによって無視されたパスを除外する</div></label><div class="setting-description" title="Files and directories ignored by the current project's VCS system will be ignored by some packages, such as the fuzzy finder and find and replace. For example, projects using Git have these paths defined in the .gitignore file. Individual packages might have additional config settings for ignoring VCS ignored files and folders." data-localized="true">現在のプロジェクトで使用中のバージョン管理システムによって無視されたファイルとディレクトリが、あいまい検索や検索、置換の中で無視されるようになります。 例えば Git を使用しているプロジェクトでは .gitignore ファイルで定義されたパスがそれにあたります。 個々のパッケージにもこの設定とは別にファイルやフォルダを無視する設定があるかもしれません。</div></div></div></div>
</template>

<script>
import GlobalFooter from '@/components/GlobalFooter';

export default {
  name: 'checkbox',
  components: {
    GlobalFooter,
  },
};
</script>

<style scoped>
*, *:before, *:after {
  box-sizing: border-box;
}

input[type="radio"],
input[type="checkbox"] {
  margin: 4px 0 0;
  margin-top: 1px \9;
  line-height: normal;
}

input[type="radio"]:focus,
input[type="checkbox"]:focus {
  outline: 2px auto #5293d8;
  outline-offset: -2px;
}

.radio,
.checkbox {
  position: relative;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
}
.radio label,
.checkbox label {
  min-height: 15px;
  padding-left: 20px;
  margin-bottom: 0;
  font-weight: normal;
  cursor: pointer;
}
.radio input[type="radio"],
.radio-inline input[type="radio"],
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"] {
  position: absolute;
  margin-left: -20px;
  margin-top: 4px \9;
}
.radio + .radio,
.checkbox + .checkbox {
  margin-top: -5px;
}
.radio-inline,
.checkbox-inline {
  position: relative;
  display: inline-block;
  padding-left: 20px;
  margin-bottom: 0;
  vertical-align: middle;
  font-weight: normal;
  cursor: pointer;
}
.radio-inline + .radio-inline,
.checkbox-inline + .checkbox-inline {
  margin-top: 0;
  margin-left: 10px;
}
input[type="radio"][disabled],
input[type="checkbox"][disabled],
input[type="radio"].disabled,
input[type="checkbox"].disabled,
fieldset[disabled] input[type="radio"],
fieldset[disabled] input[type="checkbox"] {
  cursor: not-allowed;
}
.radio-inline.disabled,
.checkbox-inline.disabled,
fieldset[disabled] .radio-inline,
fieldset[disabled] .checkbox-inline {
  cursor: not-allowed;
}
.radio.disabled label,
.checkbox.disabled label,
fieldset[disabled] .radio label,
fieldset[disabled] .checkbox label {
  cursor: not-allowed;
}

/*****************/

.settings-view .checkbox {
  padding-left: 2.25em;
}
.settings-view .checkbox label {
  padding-left: 0;
  display: block;
}
.settings-view .checkbox .setting-title {
  display: inline-block;
}
.settings-view input[type="checkbox"] {
  -webkit-appearance: none;
  display: inline-block;
  position: relative;
  font-size: inherit;
  margin: 0 0.75em 0 -2.25em;
  vertical-align: top;
  width: 1.5em;
  height: 1.5em;
  cursor: pointer;
  outline: 0;
  border-radius: 2px;
  background-color: #555555;
  transition: background-color 0.16s cubic-bezier(0.5, 0.15, 0.2, 1);
}
.settings-view input[type="checkbox"]:focus {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
}
.settings-view input[type="checkbox"]:active {
  background-color: #17ca65;
}
.settings-view input[type="checkbox"]::before,
.settings-view input[type="checkbox"]::after {
  content: "";
  position: absolute;
  top: 1.1em;
  left: .6em;
  height: .16em;
  min-height: 2px;
  border-radius: 1px;
  background-color: #292c2f;
  transform-origin: 0% 0%;
  opacity: 0;
  transition: transform 0.1s cubic-bezier(0.5, 0.15, 0.2, 1), opacity 0.1s cubic-bezier(0.5, 0.15, 0.2, 1);
}
.settings-view input[type="checkbox"]::before {
  width: .45em;
  transform: rotate(225deg) scale(0);
}
.settings-view input[type="checkbox"]::after {
  width: .9em;
  margin: -1px;
  transform: rotate(-45deg) scale(0);
  transition-delay: .05s;
}
.settings-view input[type="checkbox"]:checked {
  background-color: #17ca65;
}
.settings-view input[type="checkbox"]:checked:active {
  background-color: #555555;
}
.settings-view input[type="checkbox"]:checked::before,
.settings-view input[type="checkbox"]:checked::after {
  opacity: 1;
}
.settings-view input[type="checkbox"]:checked::before {
  transform: rotate(225deg) scale(1);
  transition-delay: .05s;
}
.settings-view input[type="checkbox"]:checked::after {
  transform: rotate(-45deg) scale(1);
  transition-delay: 0;
}

.settings-view .settings-panel label {
  color: #aaaaaa;
}

.settings-view .checkbox {
  padding-left: 2.25em;
}
.settings-view .checkbox label {
  padding-left: 0;
  display: block;
}
.settings-view .checkbox .setting-title {
  display: inline-block;
}
.settings-view input[type="checkbox"] {
  -webkit-appearance: none;
  display: inline-block;
  position: relative;
  font-size: inherit;
  margin: 0 0.75em 0 -2.25em;
  vertical-align: top;
  width: 1.5em;
  height: 1.5em;
  cursor: pointer;
  outline: 0;
  border-radius: 2px;
  background-color: #555555;
  transition: background-color 0.16s cubic-bezier(0.5, 0.15, 0.2, 1);
}
.settings-view input[type="checkbox"]:focus {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
}
.settings-view input[type="checkbox"]:active {
  background-color: #17ca65;
}
.settings-view input[type="checkbox"]::before,
.settings-view input[type="checkbox"]::after {
  content: "";
  position: absolute;
  top: 1.1em;
  left: .6em;
  height: .16em;
  min-height: 2px;
  border-radius: 1px;
  background-color: #292c2f;
  transform-origin: 0% 0%;
  opacity: 0;
  transition: transform 0.1s cubic-bezier(0.5, 0.15, 0.2, 1), opacity 0.1s cubic-bezier(0.5, 0.15, 0.2, 1);
}
.settings-view input[type="checkbox"]::before {
  width: .45em;
  transform: rotate(225deg) scale(0);
}
.settings-view input[type="checkbox"]::after {
  width: .9em;
  margin: -1px;
  transform: rotate(-45deg) scale(0);
  transition-delay: .05s;
}
.settings-view input[type="checkbox"]:checked {
  background-color: #17ca65;
}
.settings-view input[type="checkbox"]:checked:active {
  background-color: #555555;
}
.settings-view input[type="checkbox"]:checked::before,
.settings-view input[type="checkbox"]:checked::after {
  opacity: 1;
}
.settings-view input[type="checkbox"]:checked::before {
  transform: rotate(225deg) scale(1);
  transition-delay: .05s;
}
.settings-view input[type="checkbox"]:checked::after {
  transform: rotate(-45deg) scale(1);
  transition-delay: 0;
}

.settings-view .setting-title {
  font-size: 1.2em;
  -webkit-user-select: none;
}
.settings-view .setting-description {
  color: #555555;
  -webkit-user-select: none;
  cursor: default;
}
.settings-view .setting-description:empty {
  display: none;
}
</style>
