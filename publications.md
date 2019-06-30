---
layout: page
title: Publications
permalink: /publications/
---





<div class="row">
    <div class="col-3"></div>
    <div class="col-6">
        <h2>Featured Publications</h2>
    </div>
    <div class="col-3"></div>
    
</div>

<hr>

<div class="container">

<!-- SAMPLE STRUCTURE OF A CITATION - for future reference -->
<!-- <div class="row">
        <div class="col-2">
            <img class="img-thumbnail" src="the_magazine_blue_print.jpg" alt="citation_figure">
        </div>
    
        <div class="col-10">
            <span class="lead"><a href="">Test publication to be used for highlighted publications.</a></span>
            <br>
            <span class="lead">LastName F, LastName F, LastName F, LastName F, LastName F, LastName F, LastName F, LastName F, LastName F, LastName F.</span>
            <h6>Sci Rep. YYYY MMM DD;0(0):0000. doi: 00.0000/s00000-000-00000-0.</h6>
            <span class="text-muted">PMID: 00000000 <a href="">Free Article</a></span>
            <br>
            <a href="">Similar articles</a>
        </div>
</div> -->
<div class="row">
        <div class="col-md-4">
          <div class="thumbnail">
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/31190077">
              <img src="../images/publications/automatic_assessment_of_glioma_burden.png" alt="Lights" class="img-thumbnail">
              <div class="caption">
                <p>Automatic assessment of glioma burden: A deep learning algorithm for fully automated volumetric and bi-dimensional measurement.</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="thumbnail">
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/29801159">
              <img src="../images/publications/auto_diagnosis_of_plus_disease_in_retinopathy_of_prematurity.png" alt="Nature"  class="img-thumbnail">
              <div class="caption">
                <p>Automated Diagnosis of Plus Disease in Retinopathy of Prematurity Using Deep Convolutional Neural Networks.</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="thumbnail">
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/29617797">
              <img src="../images/publications/distributed_deep_learning_networks_among_institutions_for_medical_imaging.png" alt="Fjords"  class="img-thumbnail">
              <div class="caption">
                <p>Distributed deep learning networks among institutions for medical imaging.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
          


</div>

<hr>

<div class="row">
    <div class="col-3"></div>
    <div class="col-6">
            <h2>Lab Publications on <a style='text-decoration: underline' href="https://www.ncbi.nlm.nih.gov/pubmed/?term=(Kalpathy+Cramer%5BAuthor%5D)+OR+(Kalpathy+Cramer+J%5BAuthor%5D)+OR+(Kalpathy+Cramer%2C+Jayashree%5BAuthor%5D)+OR+(Jayashree%2C+Kalpathy+Cramer%5BAuthor%5D)+OR+(Gerstner%2C+Elizabeth%5BAuthor%5D)+OR+(Gerstner+ER%5BAuthor%5D)+OR+(Gerstner%2C+Elizabeth+R%5BAuthor%5D)+AND+(MGH+OR+Massachussetts+General+Hospital+OR+Martinos+Center)+NOT+(Publisher+Correction)">PubMed</a></h2>
            

    </div>
    <div class="col-3"></div>    
</div>

<div id="root"></div>


<script>

    // Create a request variable for the ids of each citation and assign a new XMLHttpRequest object to it.
    // Open a new connection, using the GET request on the URL endpoint
    // NOTE: async is set to false...this is to guarantee I have the response after the line request.send() and so I can use the data
    // NOTE: apparently this is ultimately slower in the end and not the best coding practice, but I think here it is fine :)
    // See this page for more info on how it could be bad https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
    var id_request = new XMLHttpRequest()
    var id_query = 'esearch.fcgi?db=pubmed&term=(Kalpathy+Cramer%5BAuthor%5D)+OR+(Kalpathy+Cramer+J%5BAuthor%5D)+OR+(Kalpathy+Cramer%2C+Jayashree%5BAuthor%5D)+OR+(Jayashree%2C+Kalpathy+Cramer%5BAuthor%5D)+OR+(Gerstner%2C+Elizabeth%5BAuthor%5D)+OR+(Gerstner+ER%5BAuthor%5D)+OR+(Gerstner%2C+Elizabeth+R%5BAuthor%5D)+AND+(MGH+OR+Massachussetts+General+Hospital+OR+Martinos+Center)+NOT+(Publisher+Correction)&retmode=json'
    id_request.open(method='GET', url='https://eutils.ncbi.nlm.nih.gov/entrez/eutils/'+id_query, async=false)        
    id_request.send()
    var ids = JSON.parse(id_request.responseText)['esearchresult']['idlist']
    console.log(ids)
    // Create HTML Citation //

    for(let i=0; i<ids.length; i++){

        var build_HTML_from_citation = function(id,index){
            // Request for an individual citation ID
            var citation_request = new XMLHttpRequest()
            var citation_query = 'esummary.fcgi?db=pubmed&id='+id+'&retmode=json'
            citation_request.open(method='GET', url='https://eutils.ncbi.nlm.nih.gov/entrez/eutils/'+citation_query, async=false)
            citation_request.send()
            citation = JSON.parse(citation_request.responseText)

            //Get root div to append to
            const app = document.getElementById('root')

            //Create a container for entry
            const container = document.createElement('div')
            container.setAttribute('class', 'container')

            //Create a row
            const row = document.createElement('div');row.setAttribute('class', 'row')

            //Create two columns
            // column 1 - to number the citation
            const col_number = document.createElement('div');col_number.setAttribute('class', 'col-1')
            const number = document.createElement('p')
            number.innerHTML = index+1+'.' //THIS NEEDS AUGMENTING

            // column 2 - the citation itself
            const col_citation = document.createElement('div');col_citation.setAttribute('class', 'col-11')
            const title = document.createElement('span');title.setAttribute('class', 'lead')
            const title_link = document.createElement('a');title_link.setAttribute('href','https://www.ncbi.nlm.nih.gov/pubmed/'+citation['result']['uids'][0])
            title_link.innerHTML = citation['result'][id]['title']

            const authors = document.createElement('span');authors.setAttribute('class', 'lead')
            authors.innerHTML = '';
            citation['result'][id]['authors'].forEach((element, index) => {
                author_count = citation['result'][id]['authors'].length
                authors.innerHTML += (index+1 === author_count) ? element['name']+'.' : element['name']+', ';
                
            })

            const publishing_details = document.createElement('h6')
            var vol_issue_pages = '' // We have to build this string out of condition based on whether that info was available
            if (citation['result'][id]['volume'] === '' && citation['result'][id]['pages'] === ''){
                vol_issue_pages = ''
            }else if (citation['result'][id]['issue'] === ''){
                vol_issue_pages = citation['result'][id]['volume']+':'+citation['result'][id]['pages']+'. '
            }else {
                vol_issue_pages = citation['result'][id]['volume']+
                              '('+citation['result'][id]['issue']+'):'+
                                  citation['result'][id]['pages']+'. '
            }

            publishing_details.innerHTML = citation['result'][id]['source']+'. '+
                                citation['result'][id]['pubdate']+
                                (vol_issue_pages === '' ? '. ':';')+vol_issue_pages+
                                citation['result'][id]['elocationid']+'.'




            const pmid = document.createElement('span');pmid.setAttribute('class', 'text-muted')
            pmid.innerHTML = 'PMID: '+citation['result']['uids'][0]+' '

            const pmid_link = document.createElement('a');pmid_link.setAttribute('href','https://www.ncbi.nlm.nih.gov/pubmed/'+citation['result']['uids'][0])
            pmid_link.innerHTML = 'Free Article'

            const similar_article_link = document.createElement('a');similar_article_link.setAttribute('href','https://www.ncbi.nlm.nih.gov/pubmed?linkname=pubmed_pubmed&from_uid='+citation['result']['uids'][0])
            similar_article_link.innerHTML = 'Similar Articles'

            // Build the tree structure in the right order (tabs are just for easy understanding)
            app.appendChild(container)
                container.appendChild(row)
                    row.appendChild(col_number)
                        col_number.appendChild(number)
                    row.appendChild(col_citation)    
                        col_citation.appendChild(title)
                            title.appendChild(title_link)
                        col_citation.appendChild(document.createElement('br'))
                        col_citation.appendChild(document.createElement('br'))
                        col_citation.appendChild(authors)
                        col_citation.appendChild(publishing_details)
                        col_citation.appendChild(pmid)
                            pmid.appendChild(pmid_link)
                        col_citation.appendChild(document.createElement('br'))
                        col_citation.appendChild(similar_article_link)
                        col_citation.appendChild(document.createElement('br'))
                        col_citation.appendChild(document.createElement('br'))
                        col_citation.appendChild(document.createElement('br'))
        }
        // setTimeout(()=>{build_HTML_from_citation(ids[i], i)}, i*506.125)
        setTimeout(()=>{build_HTML_from_citation(ids[i], i)}, i*500)
        // Why not this???
        // setTimeout(build_HTML_from_citation(ids[i], i), i*3000)
        // I tried it and the build_HTML_from_citation() function was being called for each loop without a delay


    }



    
    
    
</script>






<!-- NEW - 06/21/2019 - this is the query used to search on PubMed for our papers--> 

<!-- (Kalpathy Cramer[Author]) OR (Kalpathy Cramer J[Author]) OR (Kalpathy Cramer, Jayashree[Author]) OR (Jayashree, Kalpathy Cramer[Author]) OR (Gerstner, Elizabeth[Author]) OR (Gerstner ER[Author]) OR (Gerstner, Elizabeth R[Author]) OR (Rosen, Bruce[Author]) OR (Rosen, B[Author]) OR (Rosen, BR[Author]) AND (MGH OR Massachussetts General Hospital OR Martinos Center) NOT (Publisher Correction)  -->

<!-- OLD -->

<!-- An updated list of publications and categorizations will be coming soon! 
<br/>
<br/>
In the meantime, please see this search generated from PubMed with some of our lab members' recent work. Note that the papers found in the PubMed search below may include publications from different people with the same name as one of our lab members, or work done outside of the context of the QTIM lab.
<br/>
<br/>

<iframe src="https://www.ncbi.nlm.nih.gov/pubmed?term=(((((((((((((((Kalpathy%20Cramer%5BAuthor%5D)%20OR%20Kalpathy%20Cramer%20J%5BAuthor%5D)%20OR%20Kalpathy%20Cramer%2C%20Jayashree%5BAuthor%5D)%20OR%20Jayashree%2C%20Kalpathy%20Cramer%5BAuthor%5D)%20OR%20Gerstner%2C%20Elizabeth%5BAuthor%5D)%20OR%20Gerstner%20ER%5BAuthor%5D)%20OR%20Gerstner%2C%20Elizabeth%20R%5BAuthor%5D)%20OR%20Brown%2C%20James%20M%5BAuthor%5D)%20OR%20Chang%2C%20Ken%5BAuthor%5D)%20OR%20Ly%2C%20Ina%5BAuthor%5D)%20OR%20Ly%2C%20K%20Ina%5BAuthor%5D)%20OR%20Beers%2C%20Andrew%5BAuthor%5D)%20OR%20Mamonov%2C%20Artem%5BAuthor%5D)%20OR%20Mamomov%2C%20Artem%5BAuthor%5D)%20OR%20Mamonov%2C%20Artem%20B%5BAuthor%5D)%20OR%20Mamonov%20AB%5BAuthor%5D" style="width: 100%; height: 600px" frameborder="0"></iframe> -->


<!--- (((((((((((((((Kalpathy Cramer[Author]) OR Kalpathy Cramer J[Author]) OR Kalpathy Cramer, Jayashree[Author]) OR Jayashree, Kalpathy Cramer[Author]) OR Gerstner, Elizabeth[Author]) OR Gerstner ER[Author]) OR Gerstner, Elizabeth R[Author]) OR Brown, James M[Author]) OR Chang, Ken[Author]) OR Ly, Ina[Author]) OR Ly, K Ina[Author]) OR Beers, Andrew[Author]) OR Mamonov, Artem[Author]) OR Mamomov, Artem[Author]) OR Mamonov, Artem B[Author]) OR Mamonov AB[Author] -->

