
image_count = 110

li_template_active = """<li data-target="#climbing-2021" data-slide-to="0" class="active"></li>"""
print(li_template_active)
li_template ="""<li data-target="#climbing-2021" data-slide-to="{}"></li>"""
for i in range(1,image_count):
    print(li_template.format(i))



div_template_active ="""    <div class="carousel-item active">
      <img class="d-block w-100" src="../images/fun/team_outings/2021_climbing_renamed/climbing1.jpg" alt="slide">
    </div>"""
print(div_template_active)
div_template ="""    <div class="carousel-item">
      <img class="d-block w-100" src="../images/fun/team_outings/2021_climbing_renamed/climbing{}.jpg" alt="slide">
    </div>"""
for i in range(2,image_count+1):
    print(div_template.format(i))
