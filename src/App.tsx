import React from "react";
import { FaGithub, FaLinkedin, FaGoogle, FaFileAlt } from "react-icons/fa";

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-neutral-800 font-serif scroll-smooth">
      <style>
        {`
          a {
            color:rgb(22, 79, 249); /* Tailwind orange-500 */
            transition: color 0.2s ease-in-out;
          }
          a:hover {
            color: rgb(22, 79, 249); /* Tailwind orange-700 */
            text-decoration: underline;
          }
        `}
      </style>
      {/* Top logo */}
      <div className="flex flex-col items-center py-8">
        <img src="/lamp-icon.png" alt="Lamp icon" className="h-12 mb-2" />
        <h1 className="text-xl tracking-widest">Senuri De Silva</h1>
        <h4 className="text-xs tracking-widest">Senuri_De_Silva_from.tp[AT]imcb[DOT]a-star[DOT]edu[DOT]sg</h4>
      </div>

      {/* Navigation */}
      <nav className="text-center border-t border-b py-2 text-sm text-neutral-500">
        <ul className="flex justify-center space-x-4">
          <li><a href="#info" className="hover:underline">Bio</a></li>
          <li><a href="#news" className="hover:underline">News</a></li>
          <li><a href="#research" className="hover:underline">Research</a></li>
          <li><a href="#opensource" className="hover:underline">Projects</a></li>
          <li><a href="#service" className="hover:underline">Service</a></li>
          <li><a href="#students" className="hover:underline">Students</a></li>
          <li><a href="#photography" className="hover:underline">Photography</a></li>
        </ul>
      </nav>

      <div className="flex max-w-7xl mx-auto mt-8 px-4 justify-start">
        {/* Sidebar */}
        <aside className="w-1/4 pr-6 text-sm">
          <div className="mb-4">
            <img src="/profile.jpg" alt="Profile" className="w-24 h-24 rounded-full mb-2 border border-neutral-300" />
            <h2 className="font-semibold">Senuri De Silva</h2>
            <p className="text-neutral-600">Researcher · Writer · Quiet Thinker · Aspiring photographer</p>
          </div>
          <div className="border-t pt-2">
            <ul className="space-y-1">
              <li><a href="#info" className="hover:underline">▪ Bio</a></li>
              <li><a href="#news" className="hover:underline">▪ News</a></li>
              <li><a href="#research" className="hover:underline">▪ Research</a></li>
              <li><a href="#opensource" className="hover:underline">▪ Open Source</a></li>
              <li><a href="#service" className="hover:underline">▪ Service</a></li>
              <li><a href="#students" className="hover:underline">▪ Students Mentored</a></li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <section className="w-3/4 space-y-6 text-sm">
          <div id="info">
            <p>I am a PhD student at Professor Jayantha Gunaratne's Lab, Institute of Molecular and Cell Biology (IMCB), A*STAR, Singapore, and the Yong Loo Lin School of Medicine, National University of Singapore.</p> <br></br>
            <p>Prior to this, I completed my B.Sc. in Computer Science and Engineering at the University of Moratuwa, Sri Lanka, where I was also involved in research with the Bio-Health Research Group.</p> <br></br>
            <p>My research lies at the intersection of cancer proteomics, omics data integration, and biological interpretation. I work across three main areas: (1) large-scale public omics data curation and navigation, (2) computational tool development for data integration and analysis, and (3) extraction of biologically meaningful insights supported by experimental validation.</p><br></br>
            <p>My current work focuses on breast and ovarian cancer proteomics, where I develop machine learning approaches to uncover clinically relevant biomarkers and underlying biological mechanisms. </p> <br></br>
            <p>Before graduate school, I was involved in several interdisciplinary projects. At the Bio-Health Research Group, I contributed to the development of an ADHD identification tool and similarity scoring framework using eye movement and fMRI data in both children and adults. I also worked on deep learning–based brain image classification models for Alzheimer’s disease, optimizing predictive performance using MRI and PET scans. Separately, during my time at Enactor UK, I worked on distributed systems optimization to streamline enterprise software pipelines and improve system performance.</p>
          </div>

          {/* Important Links */}
          <div>

            <div className="flex flex-wrap items-center gap-4 text-base">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
                <FaFileAlt /> <span>Resume</span>
              </a>
              <a href="https://scholar.google.com/citations?user=hxhKP6kAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
                <FaGoogle /> <span>Scholar</span>
              </a>
              <a href="https://sg.linkedin.com/in/ktsenuridesilva" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
                <FaLinkedin /> <span>LinkedIn</span>
              </a>
              <a href="https://github.com/kts-desilva" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
                <FaGithub /> <span>GitHub</span>
              </a>
            </div>
          </div>

          <div id="news">
            <h2 className="font-semibold text-neutral-700 mb-1">News</h2>
            <ul className="list-disc ml-5">
              <li>Apr 2025 – I presented our work on Data Integration at IMCB 40-year Anniversary Symposium</li>
              <li>Feb 2025 – I gave a talk at IMCB Phd-Stundent Seminar</li>
              <li>Feb 2025 – I gave a poster presentation on our machine learning and data integration tools at <a href="https://medicine.nus.edu.sg/sites/gss/absc.html">11th Annual Biomedical Scientific Congress (ABSC) 2025</a></li>
              <li>Sep 2024 - I gave a poster presentaiton on our novel high-grade ovarian cancer biomaker discovery at <a href="https://www.mcponline.org/article/S1535-9476(24)00167-1/fulltext">Benzon Symposium 68 – Integration of Mass Spectrometry-based Proteomics and AI to Revolutionize Personalized Medicine, Copenhagen</a> </li>
              <li>Feb 2024 - I gave a talk at IMCB Phd-Stundent Seminar</li>
              <li>Sep 2023 - I gave a poster presentation at <a href="https://www.hupo.org/event-5032167">HUPO World Congress 2023 Busan</a></li>
            </ul>
          </div>
          <div id="research">
            <h2 className="font-semibold text-neutral-700 mb-1">Research</h2>
            <div className="space-y-4">
              <div className="flex shadow border rounded overflow-hidden">
                <img src="img/if.gif" alt="Research 1" className="w-40 object-cover" />
                <div className="p-3">
                  <a href="https://www.biorxiv.org/content/10.1101/2025.04.13.648650v1.abstract" className="text-blue-700 font-semibold">Uncovering Shared and Tissue-Specific Molecular Adaptations to Intermittent Fasting in Liver, Brain, and Muscle</a>
                  <p className="text-sm mt-1">Yibo Fan, <b>Senuri De Silva</b>, Nishat I Tabassum, Xiangyuan Peng, Vernise Lim, Xiangru Cheng, Keshava K Datta, Rohan Lowe, Terrance G Johns, Mark P Mattson, Suresh Mathivanan, Christopher G Sobey, Eitan Okun, Yong U Liu, Guobing Chen, Mitchell KP Lai, Dong-Gyu Jo, Jayantha Gunaratne, Thiruma V Arumugam</p>
                  <p className="italic text-sm text-neutral-500">In review 2025</p>
                </div>
              </div>

              <div className="flex shadow border rounded overflow-hidden">
                <img src="img/hgsoc.png" alt="Research 2" className="w-40 object-cover" />
                <div className="p-3">
                  <a href="https://www.nature.com/articles/s41597-024-03536-1" className="text-blue-700 font-semibold">Machine Learning-Enhanced Extraction of Biomarkers for High-Grade Serous Ovarian Cancer from Proteomics Data</a>
                  <p className="text-sm mt-1"><b>Senuri De Silva</b>, Asfa Alli-Shaik, Jayantha Gunaratne</p>
                  <p className="italic text-sm text-neutral-500">Nature Scientific Data 2024</p>
                </div>
              </div>

              <div className="flex shadow border rounded overflow-hidden">
                <img src="img/flexstat.jpeg" alt="Research 2" className="w-40 object-cover" />
                <div className="p-3">
                  <a href="https://academic.oup.com/bioinformaticsadvances/article/4/1/vbae056/7644297" className="text-blue-700 font-semibold">FlexStat: combinatory differentially expressed protein extraction</a>
                  <p className="text-sm mt-1"><b>Senuri De Silva</b>, Asfa Alli-Shaik, Jayantha Gunaratne</p>
                  <p className="italic text-sm text-neutral-500">Bioinformatics Advances, Oxford University Press, 2024</p>
                </div>
              </div>

              <div className="flex shadow border rounded overflow-hidden">
                <img src="img/reviewsc.png" alt="Research 2" className="w-40 object-cover" />
                <div className="p-3">
                  <a href="https://ietresearch.onlinelibrary.wiley.com/doi/full/10.1049/ipr2.13219" className="text-blue-700 font-semibold">Skin cancer identification utilizing deep learning: A survey</a>
                  <p className="text-sm mt-1">Dulani Meedeniya, <b>Senuri De Silva</b>, Lahiru Gamage, Uditha Isuranga</p>
                  <p className="italic text-sm text-neutral-500">IET Image Processing, 2024</p>
                </div>
              </div>

              <div className="flex shadow border rounded overflow-hidden">
                <img src="img/exsc.jpg" alt="Research 2" className="w-40 object-cover" />
                <div className="p-3">
                  <a href="https://www.mdpi.com/2079-9292/13/4/680" className="text-blue-700 font-semibold">Melanoma skin cancer identification with explainability utilizing mask guided technique</a>
                  <p className="text-sm mt-1">Lahiru Gamage, Uditha Isuranga, Dulani Meedeniya, <b>Senuri De Silva</b>, Pratheepan Yogarajah</p>
                  <p className="italic text-sm text-neutral-500">Electronics, 2024</p>
                </div>
              </div>

              <div className="flex shadow border rounded overflow-hidden">
                <img src="img/clexsc.gif" alt="Research 2" className="w-40 object-cover" />
                <div className="p-3">
                  <a href="https://ieeexplore.ieee.org/abstract/document/10145622" className="text-blue-700 font-semibold">Melanoma skin cancer classification with explainability</a>
                  <p className="text-sm mt-1">Lahiru Gamage, Uditha Isuranga, <b>Senuri De Silva</b>, Dulani Meedeniya</p>
                  <p className="italic text-sm text-neutral-500">3rd International Conference on Advanced Research in Computing (ICARC), 2023</p>
                </div>
              </div>

              <div className="flex shadow border rounded overflow-hidden">
                <img src="img/ad.png" alt="Research 2" className="w-40 object-cover" />
                <div className="p-3">
                  <a href="https://www.taylorfrancis.com/chapters/edit/10.4324/9781003165569-11/alzheimer-disease-diagnosis-using-functional-structural-neuroimaging-modalities-de-silva-dayarathna-meedeniya" className="text-blue-700 font-semibold">Alzheimer's disease diagnosis using functional and structural neuroimaging modalities</a>
                  <p className="text-sm mt-1"><b>S De Silva</b>, S Dayarathna, D Meedeniya</p>
                  <p className="italic text-sm text-neutral-500">Enabling Technology for Neurodevelopmental Disorders, Routledge, 2022</p>
                </div>
              </div>

              <div className="flex shadow border rounded overflow-hidden">
                <img src="img/dss.jpg" alt="Research 2" className="w-40 object-cover" />
                <div className="p-3">
                  <a href="https://link.springer.com/article/10.1007/s11633-020-1252-1" className="text-blue-700 font-semibold">Computational decision support system for ADHD identification</a>
                  <p className="text-sm mt-1"><b>Senuri De Silva</b>, Sanuwani Dayarathna, Gangani Ariyarathne, Dulani Meedeniya, Sampath Jayarathna, Anne MP Michalek</p>
                  <p className="italic text-sm text-neutral-500">International Journal of Automation and Computing, 2021</p>
                </div>
              </div>

              <div className="flex shadow border rounded overflow-hidden">
                <img src="img/cnn.png" alt="Research 2" className="w-40 object-cover" />
                <div className="p-3">
                  <a href="https://www.igi-global.com/article/fmri-feature-extraction-model-for-adhd-classification-using-convolutional-neural-network/266240" className="text-blue-700 font-semibold">fMRI feature extraction model for ADHD classification using convolutional neural network</a>
                  <p className="text-sm mt-1"><b>Senuri De Silva</b>, Sanuwani Udara Dayarathna, Gangani Ariyarathne, Dulani Meedeniya, Sampath Jayarathna</p>
                  <p className="italic text-sm text-neutral-500">International Journal of E-Health and Medical Communications (IJEHMC), 2021</p>
                </div>
              </div>

            </div>
          </div>

          <div id="opensource">
            <h2 className="font-semibold text-neutral-700 mb-1">Projects</h2>
            <p>Sharing some small tools and libraries I've enjoyed contributing to. No fanfare, just links.</p>
          </div>
          <div id="service">
            <h2 className="font-semibold text-neutral-700 mb-1">Service</h2>
            <p>Grateful to serve as reviewer, committee member, or occasional contributor in scientific circles.</p>
          </div>
          <div id="students">
            <h2 className="font-semibold text-neutral-700 mb-1">Students Mentored</h2>
            <p>Undergraduate students: <a>Khushi Choksi</a>(University of Purdue, Summer 2025), 
            <a href="https://www.linkedin.com/in/lahiru-kumara/"> Lahiru Gamage</a> (University of Moratuwa, FYP 2023-2024, [<a href="https://ietresearch.onlinelibrary.wiley.com/doi/abs/10.1049/ipr2.13219">1</a>, <a href="Melanoma skin cancer classification with explainability">2</a>, <a href="https://www.mdpi.com/2079-9292/13/4/680">3</a>]), 
            <a href="https://www.linkedin.com/in/uditha-isuranga/"> Uditha Isuranga</a> (University of Moratuwa, FYP 2023-2024, [<a href="https://ietresearch.onlinelibrary.wiley.com/doi/abs/10.1049/ipr2.13219">1</a>, <a href="Melanoma skin cancer classification with explainability">2</a>, <a href="https://www.mdpi.com/2079-9292/13/4/680">3</a>])</p>
          </div>
          <div id="photography">
            <h2 className="font-semibold text-neutral-700 mb-1">Photography</h2>
            <p>Check my <a href= "https://ktsdesilva95.darkroom.com/">darkroom</a> mini gallery.</p>
          </div>
          
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center text-neutral-400 text-xs py-8">
        © 2025 — Handcrafted with minimalism.
      </footer>
    </main>
  );
};

export default App;
