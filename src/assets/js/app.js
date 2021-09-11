import Spinner from './partials/spinner'

new Spinner(
    document.querySelector('.spinner-1'),
    {
        spinnerLinkClass: 'spinner__link',
        height: 460, // default 100px
        linkWidth: 180, // default 20 px
        gap: 10, // gap between spinner links, default == -1
        perspective: 1500, // default 1500
        angle: 9, // default 0 - tilt spinner
        orientation: "portrait", // landscape | portrait, default portrait
        counterStart: 1, // start counter from, default 1
        reverseContent: false, // default false
        addScrollOnKeyboard: true,
        reverseControls: false, // default false
    }
)

function addNumbers(count) {
   let fragment = new DocumentFragment()
   for (let i = 1; i <= count; i++) {
      let div = document.createElement('div')
      div.innerText = i
      fragment.append(div)
   }
   return fragment
}

const spinnerHorizontal = document.querySelector('.spinner-2')
const spinnerVertical = document.querySelector('.spinner-3')
spinnerHorizontal.append(addNumbers(30))
spinnerVertical.append(addNumbers(99))

new Spinner(
    spinnerHorizontal,
    {
        spinnerLinkClass: 'spinner__link',
        height: 400,
        linkWidth: 60,
        gap: 2,
        perspective: 1500,
        orientation: 'landscape',
        reverseContent: true,
    }
)

new Spinner(
    spinnerVertical,
    {
        spinnerLinkClass: 'spinner__link',
        height: 600,
        linkWidth: 50,
        gap: 1.5,
        perspective: 1800,
        angle: 4,
        counterStart: 1,
    }
)