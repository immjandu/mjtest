// 예제: 서버 목록 불러오기
const main = document.getElementById('main-content');

const servers = [
  { name: 'MCP Server 1', status: 'Running' },
  { name: 'MCP Server 2', status: 'Stopped' }
];

function renderServers() {
  main.innerHTML = '';
  servers.forEach(server => {
    const div = document.createElement('div');
    div.textContent = `${server.name} - ${server.status}`;
    main.appendChild(div);
  });
}

renderServers();
