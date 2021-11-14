$(document).ready(function () {
  // project section start
  var myProject = [
    {
      id: 1,
      prjname: "Travel Agency",
      prjskill: "HTML,CSS,JavaScript,Bootstrap",
      photo: "image/carosel4.jpg",
      prjlink: "https://travelagency.yethura.me/",
      modelimg: [
        "image/travelagency1.jpg",
        "image/travelagency2.jpg",
        "image/travelagency3.jpg",
      ],
    },
    {
      id: 2,
      prjname: "Event",
      prjskill: "HTML,CSS,JavaScript,Bootstrap",
      photo: "image/eventbg.jpg",
      prjlink: "http://event.yethura.me/",
      modelimg: ["image/event1.png", "image//event2.png", "image//event3.png"],
    },
    {
      id: 3,
      prjname: "Shouples",
      prjskill: "JavaScript,Bootstrap,PHP,MySql",
      photo: "image/shoupbg.jpg",
      prjlink: "https://phpproject.yethura.me/",
      modelimg: [
        "image/shouples1.png",
        "image/shouples2.png",
        "image/shouples3.png",
      ],
    },
    {
      id: 4,
      prjname: "Panda Box",
      prjskill: "CodeIgniter,HTML,CSS",
      photo: "image/pandabg.jpg",
      prjlink: "http://codeigniter.yethura.me/",
      modelimg: ["image/panda2.png", "image/panda3.png", "image/panda4.png"],
    },
    {
      id: 5,
      prjname: "Jetpack Mall",
      prjskill: "Laravel,HTML,CSS,JavaScript",
      photo: "image/jackpetbg.jpg",
      prjlink: "http://laravelproject.yethura.me/",
      modelimg: [
        "image/jetpack1.png",
        "image/jetpack2.png",
        "image/jetpack3.png",
      ],
    },
    {
      id: 6,
      prjname: "Football World",
      prjskill: "HTML,CSS,JavaScript,Laravel",
      photo: "image/footballbg.jpg",
      prjlink: "https://footballfield.yethura.me/",
      modelimg: [
        "image/football1.png",
        "image/football2.png",
        "image/football3.png",
      ],
    },
  ];

  var result = "";
  $.each(myProject, function (i, v) {
    var name = v.prjname;
    var skill = v.prjskill;
    var photo = v.photo;
    var link = v.prjlink;
    var image = v.modelimg;
    var id = v.id;
    // console.log(image)
    result += ` <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div class="portfolio-wrap">
                            <img src="${photo}" class="img-fluid" alt="">
                            <div class="portfolio-info">
                                <h4>${name}</h4>
                                <p>${skill}</p>
                            </div>
                            <div class="portfolio-links">
                                <a href="${link}" data-gall="portfolioGallery" class="venobox btn" id="btnAbt" target="blank">View Demo</a>
                                <button type="button" class="btn" id="btnAbt" data-toggle="modal" data-target="#dialog${i}">
                                    View Detail
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="dialog${i}" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">${name}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="owl-carousel owl-theme">`;
    $.each(image, function (i, v) {
      console.log(v);
      result += `<div> <img src="${v}"> </div>`;
    });
    result += `</div>
                                </div>
                                <div class="modal-footer">
                                    <a href="${link}" target="blank"><button type="button" class="btn" id="btnAbt">Visit Page</button></a>
                                </div>
                            </div>
                        </div>
                    </div>`;
  });

  $("#result").html(result);

  // project section end

  var mySkill = [
    {
      id: 1,
      name: "HTML",
      skill: 80,
    },
    {
      id: 2,
      name: "CSS",
      skill: 80,
    },
    {
      id: 3,
      name: "JavaScript",
      skill: 75,
    },
    {
      id: 4,
      name: "JQuery",
      skill: 75,
    },
    {
      id: 5,
      name: "Vue JS",
      skill: 65,
    },
    {
      id: 6,
      name: "PHP",
      skill: 80,
    },
    {
      id: 7,
      name: "MySql",
      skill: 80,
    },
    {
      id: 8,
      name: "Laravel",
      skill: 70,
    },
  ];

  var skillresult = "";
  $.each(mySkill, function (i, v) {
    var id = v.id;
    var name = v.name;
    var skill = v.skill;

    skillresult += `<div class="col-lg-6">
                        <div class="progress">
                            <span class="skill">${name} <i class="val">${skill}%</i></span>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" role="progressbar" aria-valuenow="${skill}" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>`;
  });

  $("#skillsection").html(skillresult);
});
