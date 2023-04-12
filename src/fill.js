
let fillArray = []
for (let i = 1; i < 91; i++) {
    fillArray.push(i)
}
const base400 = 'https://larmee.mo.cloudinary.net/400/'
const base800 = 'https://larmee.mo.cloudinary.net/800/'
const baseO = 'https://res.cloudinary.com/hallhassi/image/upload/kevin/'

function handleClick(e) {
    if (e.currentTarget.classList.contains("expanded")) {
        e.currentTarget.classList.remove("expanded")
        e.currentTarget.classList.add("full")
        e.currentTarget.querySelector('img').src = e.currentTarget.querySelector('img').dataset.o
    }
    else if (e.currentTarget.classList.contains("full")) {
        e.currentTarget.classList.remove("full")
        e.currentTarget.classList.add("expanded")
        e.currentTarget.querySelector('img').src = e.currentTarget.querySelector('img').dataset.lo
        console.log('a');
    }
    else {
        e.currentTarget.parentElement.querySelectorAll('.expanded').forEach((x) => {
            x.classList.remove("expanded")
            x.querySelector('img').src = x.querySelector('img').dataset.lo
        })
        e.currentTarget.classList.add("expanded")
        console.log(e.currentTarget);
        e.currentTarget.querySelector('img').src = e.currentTarget.querySelector('img').dataset.hi
        e.currentTarget.scrollIntoView()
    }
}
export default function Section({title, array, index}) {
    <section className={[title, index === 0 && 'active'].join(' ')} >
        {
            array.map((item, i) =>
            (
                <div className="fill" key={index + '-' + i} onClick={handleClick}>
                    <img
                        src={base400 + item.url}
                        data-lo={base400 + item.url}
                        data-hi={base800 + item.url}
                        data-o={baseO + item.url}
                    />
                    <div>{item}</div>
                </div>
            )
            )
        }
    </section >
}
