

window.onload = function () {
    var selectedId = null;
        OrgChart.templates.luba.defs += '<filter id="f1" > \
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" /> \
                    </filter>';
        var chart = new OrgChart(document.getElementById("tree"), {
            template: 'luba',
            nodeBinding: {
                field_0: "name",
                field_1: "title",
                img_0: "img"
            }
        });

        chart.on('redraw', function (sender) {
            blur();
        });
        chart.editUI.on('show', function (sender, id) {
            selectedId = id;
            blur();
        });
        chart.editUI.on('hide', function (sender) {
            var elements = document.querySelectorAll('[filter="url(#f1)"]');
            for (var i = 0; i < elements.length; i++) {
                elements[i].removeAttribute('filter');
            }
            selectedId = null;
        });
        chart.load([
            { id: "1", name: "Jack Hill", title: "Chairman and CEO", email: "amber@domain.com", img: "https://cdn.balkan.app/shared/1.jpg" },
            { id: "2", pid: "1", name: "Lexie Cole", title: "QA Lead", email: "ava@domain.com", img: "https://cdn.balkan.app/shared/2.jpg" },
            { id: "3", pid: "1", name: "Janae Barrett", title: "Technical Director", img: "https://cdn.balkan.app/shared/3.jpg" },
            { id: "4", pid: "2", name: "Aaliyah Webb", title: "Manager", email: "jay@domain.com", img: "https://cdn.balkan.app/shared/4.jpg" },
            { id: "5", pid: "2", name: "Elliot Ross", title: "QA", img: "https://cdn.balkan.app/shared/5.jpg" },
            { id: "6", pid: "3", name: "Anahi Gordon", title: "QA", img: "https://cdn.balkan.app/shared/6.jpg" },
            { id: "7", pid: "3", name: "Knox Macias", title: "QA", img: "https://cdn.balkan.app/shared/7.jpg" },
            { id: "8", pid: "4", name: "Nash Ingram", title: ".NET Team Lead", email: "kohen@domain.com", img: "https://cdn.balkan.app/shared/8.jpg" },
            { id: "9", pid: "4", name: "Sage Barnett", title: "JS Team Lead", img: "https://cdn.balkan.app/shared/9.jpg" },

        ]);

        function blur() {
            if (selectedId == null){
                return;
            }
            var node = chart.getBGNode(selectedId);
            var skipBlur = [node.id];
            var skipBlurLink = [];
            while (node.parent) {
                skipBlur.push(node.parent.id);
                skipBlurLink.push('[' + node.parent.id + '][' + node.id + ']')
                node = node.parent;
            }

            var nodeElements = document.querySelectorAll('[node-id]');
            for (var i = 0; i < nodeElements.length; i++) {
                var id = nodeElements[i].getAttribute('node-id');
                if (skipBlur.indexOf(id) == -1)
                    nodeElements[i].setAttribute('filter', 'url(#f1)');
            }

            var expcollElements = document.querySelectorAll('[control-expcoll-id]');
            for (var i = 0; i < expcollElements.length; i++) {
                var id = expcollElements[i].getAttribute('control-expcoll-id');
                if (skipBlur.indexOf(id) == -1)
                    expcollElements[i].setAttribute('filter', 'url(#f1)');
            }

            var linksElements = document.querySelectorAll('[link-id]');
            for (var i = 0; i < linksElements.length; i++) {
                var id = linksElements[i].getAttribute('link-id');

                if (skipBlurLink.indexOf(id) == -1)
                    linksElements[i].setAttribute('filter', 'url(#f1)');
            }
        }
};
