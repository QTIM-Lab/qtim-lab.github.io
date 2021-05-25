template ="""    <div class="carousel-item">
      <img class="d-block w-100" src="../images/fun/team_outings/2021_arboretum_renamed/arboretum{}.jpg" alt="slide">
    </div>"""
for i in range(1,32+1):
    print(template.format(i))

