const whatever = document.querySelectorAll('.park-image')

const newHandler = async (e) => {
    e.preventDefault();
    console.log(e.target);

    // const park = document.e.target.value.trim();

}


for (i of whatever) {
  i.addEventListener('click', function() {
    console.log(this);
  });
}