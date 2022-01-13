const { St, Clutter } = imports.gi;
const Main = imports.ui.main;

const panelActivities = Main.panel.statusArea["activities"];

function init() {
    debianLogo = new St.Icon({
        icon_name: "emblem-debian",
        icon_size: 22,
        y_align: Clutter.ActorAlign.CENTER,
    });

    var activitiesLabel = new St.Label({
        text: _("Activities"),
        y_align: Clutter.ActorAlign.CENTER,
    });

    var activitiesContainer = new St.BoxLayout({
        style_class: "panel-status-menu-box",
    });

    activitiesContainer.add_actor(debianLogo);
    activitiesContainer.add_actor(activitiesLabel);

    panelActivities._label.destroy();
    panelActivities.add_actor(activitiesContainer);
}

function enable() {
    debianLogo.show();
}


function disable() {
    debianLogo.hide();
}
