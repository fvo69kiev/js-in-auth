<div>
<h1>Js-in-auth</h1>
<p>Js-in-auth is a pure JavaScript language project.</p>
<ul>
<li>The JavaScript language</li>
<li>Browser: Document, Events, Interfaces</li>
</ul>
<h3><a href="https://js-in-auth-7c450.web.app/" target="_blank">Demo version</a></h3>
<h2>Examples</h2>
<p>Sample code for implementing an authentication:</p>
<pre>
export function authWithEmailAndPassword(email, password) {
  const apiKey = 'AIzaSyDoWAF4uHgsKFtsgymPBD1DfsnyA8E';
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
    method: 'POST',
    body: JSON.stringify({
      email, password,
      returnSecureToken: true
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => data.idToken);
}
</pre>
<h2>Installation</h2>
<p>Clone</p>
<pre>git clone https://github.com/fvo69kiev/js-in-auth.git</pre>
<p>If you'd like to use npm, it's as easy as:</p>
<pre>npm install</pre>
<p>Open project</p>
<pre>npm run start</pre>
<p>Authentication: click button "Auth"</p>
<pre>Email: js-in-auth@gmail.com</pre>
<pre>Password: js-in-auth</pre>
<h2>Build</h2>
<pre>npm run build</pre>
</div>