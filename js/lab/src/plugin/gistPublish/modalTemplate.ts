/*
 *  Copyright 2017 TWO SIGMA OPEN SOURCE, LLC
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

export default `
<div>
  <p class="alert alert-primary bg-info">
    <strong>Leave the Personal Access Token field empty to publish as an anonymous gist.</strong>
    <br />
    <strong>Press enter or click the "Publish" button below.  A
    window will open with the results, which you can share like
    any URL.</strong>
  </p>
  <form>
    <div class="form-group">
      <label>Personal Access Token</label>
      <input type="password" class="form-control">
    </div>
  </form>
  <p class="help-block">
    <span>Enter a <a target="_blank" href="https://github.com/settings/tokens">Personal Access Token</a> to publish the notebook as a gist in your GitHub account.</span><br />
    <span>We recommend your Personal Access Token have only the <strong><i>gists</i></strong> scope.</span><br />
    <span>You can read about scopes <a href="https://developer.github.com/apps/building-oauth-apps/scopes-for-oauth-apps/">here</a></span>
  </p>
</div>
`;
