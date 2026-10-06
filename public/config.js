// 교사가 설정한 내용은 학생에게 공개됩니다. 비밀번호나 검사 정답은 넣지 마세요.
window.COURSE = {
  dueDate: "",
  totalPoints: "",
  rubric: "",
  tooningUrl: "https://tooning.io/",
  boards: [
    {label: "1반", url: ""},
    {label: "2반", url: ""},
    {label: "3반", url: ""},
    {label: "4반", url: ""},
    {label: "5반", url: ""}
  ],
  assessmentVersion: "STAR-CONCEPT-DRAFT-2",
  assessmentStatus: "draft"
};
const passed=new URLSearchParams(location.search).get('course');
if(passed){try{const bytes=Uint8Array.from(atob(passed.replaceAll('-','+').replaceAll('_','/')),c=>c.charCodeAt(0));const c=JSON.parse(new TextDecoder().decode(bytes));for(const key of ['dueDate','totalPoints','rubric','tooningUrl'])if(typeof c[key]==='string'&&c[key].length<=2000)window.COURSE[key]=c[key];if(Array.isArray(c.boards))window.COURSE.boards=c.boards.slice(0,5).map(b=>({label:String(b.label||'').slice(0,30),url:String(b.url||'').slice(0,2000)}));document.querySelectorAll('a[href]').forEach(a=>{const h=a.getAttribute('href');if(/^(index|guide|test)\.html(?:#.*)?$/.test(h)){const [f,hash]=h.split('#');a.href=f+'?course='+encodeURIComponent(passed)+(hash?'#'+hash:'')}})}catch{const p=document.createElement('p');p.className='callout warning';p.textContent='수업 설정 링크를 읽지 못해 기본 안내를 표시합니다. 선생님께 최신 링크를 확인하세요.';document.querySelector('main').prepend(p)}}
