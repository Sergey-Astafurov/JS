window.addEventListener("orientationchange", (event) => {
    console.log(
        `смена ориентации`,
    );
});

window.onbeforeunload = function(evt) {
    evt = evt || window.event;
    evt.returnValue = "Вы же ничего не сохранили!";
}