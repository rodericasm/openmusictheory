<template>
  <aside>
    <div class="center_nav_container" style="margin-top: 20px;">
      <svg
        class="bi bi-list"
        width="2em"
        height="2em"
        viewBox="0 0 16 16"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <div class="logo_container center_nav_container">
      <p class="logo_text center_text">
        Open
        <br />Music <br />Theory
      </p>
    </div>
    <div class="center_nav_container ">
      <input
        type="text"
        id="search_toc_bar"
        v-on:keyup="search_toc()"
        placeholder="Search for page..."
        title="Search for page"
      />
    </div>

    <ul class="nav_container center_nav_container" id="nav_list_menu">
      <li class="nav_section" v-for="val in nav_build">
        <dl>
          <dt class="nav_header">{{ val.header }}</dt>
          <dd class="nav_item" v-for="nav_val in val.nav">
            <a
              v-if="nav_val.href"
              :href="nav_val.link"
              target="_blank"
              :id="nav_val.name"
            >
              <span class="hitbox_span">
                <span class="underline_span">
                  {{ nav_val.name }}
                  <i>(PDF Handout)</i>
                </span>
              </span>
            </a>
            <router-link v-else :to="nav_val.link" :id="nav_val.name">
              <span class="hitbox_span">
                <span class="underline_span">{{ nav_val.name }}</span>
              </span>
            </router-link>
          </dd>
        </dl>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  methods: {
    search_toc: function() {
      // Declare variables
      var input, filter, dl, dd;
      input = document.getElementById("search_toc_bar");
      filter = input.value.toUpperCase();
      dl = document.getElementById("nav_list_menu");
      dd = dl.getElementsByTagName("dd");

      // Loop through all list items, and hide those who don't match the search query
      for (var i = 0; i < dd.length; i++) {
        if (dd[i].innerText.toUpperCase().indexOf(filter) > -1) {
          dd[i].parentElement.firstElementChild.setAttribute("name", "s");
          dd[i].parentElement.firstElementChild.style.display = "";
          dd[i].style.display = "";
        } else {
          if (
            dd[i].parentElement.firstElementChild.getAttribute("name") != "s"
          ) {
            dd[i].parentElement.firstElementChild.style.display = "none";
          }

          dd[i].style.display = "none";
        }

        if (
          dd[i].parentElement.lastElementChild
            .getElementsByTagName("a")[0]
            .getAttribute("id") ==
          dd[i].getElementsByTagName("a")[0].getAttribute("id")
        ) {
          dd[i].parentElement.firstElementChild.setAttribute("name", "");
        }
      }
    },
  },
  data: function() {
    return {
      nav_build: [
        {
          header: "Introduction",
          nav: [
            { name: "Home", link: "/index.html" },
            {
              name: "About Open Music Theory",
              link: "/about",
            },
          ],
        },
        {
          header: "Fundamentals",
          nav: [
            { name: "Basic notation", link: "/basicNotation" },
            {
              name: "Meter",
              link: "/meter",
            },
            {
              name: "Protonotation",
              link: "/protonotation",
            },
            {
              name: "Rhythmic values",
              link: "/rhythmicValues",
            },
            {
              name: "Beams and borrowed divisions",
              link: "/beams",
            },
            {
              name: "Pitches",
              link: "/pitches",
            },
            {
              name: "Scales and scale degrees",
              link: "/scales",
            },
            {
              name: "Key signatures",
              link: "/keySignatures",
            },
            {
              name: "Intervals",
              link: "/intervals",
            },
            {
              name: "Triads and 7th chords",
              link: "/triads",
            },
            {
              name: "Types of motion",
              link: "/motionTypes",
            },
          ],
        },
        {
          header: "Voice-leading and model composition",
          nav: [
            {
              name: "Introduction to strict voice-leading",
              link: "/speciesIntro",
            },
          ],
        },
        {
          header: "Strict 2-voice composition (species counterpoint)",
          nav: [
            {
              name: "Composing a cantus firmus",
              link: "/cantusFirmus",
            },
            {
              name: "Composing a first-species counterpoint",
              link: "/firstSpecies",
            },
            {
              name: "Composing a second-species counterpoint",
              link: "/secondSpecies",
            },
            {
              name: "Composing a third-species counterpoint",
              link: "/thirdSpecies",
            },
            {
              name: "Composing a fourth-species counterpoint",
              link: "/fourthSpecies",
            },
          ],
        },
        {
          header: "Strict four-voice composition",
          nav: [
            {
              name: "Introduction to thoroughbass",
              link: "/thoroughbassFigures",
            },
            {
              name: "A brief history of basso continuo",
              link: "/bassoContinuo-history",
            },
            {
              name: "Generating Roman numerals from a figured bass line",
              link: "/RNfromFB",
            },
            {
              name: "Composing in basso-continuo style",
              link: "/bassoContinuo",
            },
            {
              name: "Style and tendency",
              link: "/tendency",
            },
            {
              name: "Tendency tones and functional harmonic dissonances",
              link: "/tendencyTonesFunctionalDissonances",
            },
            {
              name:
                "Realizing a figured bass in strict basso continuo style (video)",
              link: "/TBDemo",
            },
            {
              name: "Melodic keyboard style voice-leading",
              link: "/melodicKeyboardStyle",
            },
            {
              name: "Melodic keyboard style voice-leading schemata",
              link: "/KBVLschemata",
            },
            {
              name:
                "Realizing a figured bass line in melodic keyboard style (video)",
              link: "/melodicKB",
            },
            {
              name: "Realizing an unfigured bass line (video)",
              link: "/unfiguredBass",
            },
            {
              name: "Embellishing tones",
              link: "/embellishingTones",
            },
          ],
        },
        {
          header: "Harmony",
          nav: [
            {
              name: "Introduction to musical functions",
              link: "/functions",
            },
            {
              name: "Harmonic functions",
              link: "/harmonicFunctions",
            },
            {
              name: "Harmonic syntax - the idealized phrase",
              link: "/harmonicSyntax1",
            },
            {
              name: "Harmonic syntax - prolongation",
              link: "/harmonicSyntax2",
            },
            {
              name: "Performing a harmonic analysis",
              link: "/harmonicAnalysis",
            },
            {
              name: "Classical cadence types",
              link: "/cadenceTypes",
            },
            {
              name: "Chromatically altered subdominant chords",
              link: "/alteredSubdominants",
            },
            {
              name: "Applied chords",
              link: "/appliedChords",
            },
            {
              name: "Modal mixture",
              link: "/modalMixture",
            },
            {
              name: "Modulation",
              link: "/Modulation",
            },
          ],
        },
        {
          header: "Handouts and charts ",
          nav: [
            {
              name: "Lead-sheet and figured-bass symbols",
              link: "Graphics/Handouts/LSandFBsymbols.pdf",
              href: "true",
            },
            {
              name:
                "Harmonies (Roman numerals and functional bass) by bass scale degree",
              link: "Graphics/Handouts/HarmoniesByBassScaleDegree.pdf",
              href: "true",
            },
          ],
        },
        {
          header: " Classical theme types",
          nav: [
            {
              name: "The sentence.",
              link: "/sentence",
            },
            {
              name: "The period",
              link: "/period",
            },
            {
              name: "Hybrid themes",
              link: "/hybridThemes",
            },
            {
              name: "Compound periods",
              link: "/compoundPeriod",
            },
            {
              name: "Compound sentences",
              link: "/compoundSentence",
            },
            {
              name: "The small ternary",
              link: "/smallTernary",
            },
            {
              name: "The small binary",
              link: "/smallBinary",
            },
            {
              name: "Theme type reference",
              link: "/classicalThemes",
            },
            {
              name: "Thematic function reference",
              link: "/themeFunctions",
            },
          ],
        },
        {
          header: "Techniques of Phrase Rhythm ",
          nav: [
            {
              name: "External Expansions",
              link: "/externalExpansions",
            },
            {
              name: "Internal Expansions",
              link: "/internalExpansions",
            },
          ],
        },
        {
          header: "Sonata Form ",
          nav: [
            {
              name: "Introduction to Sonata Theory",
              link: "/SonataTheory-intro",
            },
            {
              name: "Sonata form: exposition types",
              link: "/SonataTheory-exposition",
            },
            {
              name: "Structural Points of Arrival",
              link: "/sonataStructuralPointsOfArrival",
            },
            {
              name: "Thematic Modules",
              link: "/sonataThematicModules",
            },
            {
              name: "Sonata form: the recapitulation",
              link: "/sonataRecap",
            },
            {
              name: "Sonata form: the development",
              link: "/sonataDevelopment",
            },
            {
              name: "Sonata form: framing modules (intro & coda)",
              link: "/sonataFramingModules",
            },
          ],
        },
        {
          header: "Rondo Form",
          nav: [
            { name: "Introduction to Rondo form", link: "/rondo" },
            {
              name: "Thematic Function in Rondo Form",
              link: "/thematicFunctionInRondo",
            },
            {
              name: "Five-Part Rondo",
              link: "/fivePartRondo",
            },
            {
              name: "Sonata Rondo",
              link: "/sonataRondo",
            },
          ],
        },
        {
          header: "Other formal structures in the classical style",
          nav: [{ name: "Minuet form", link: "/minuet" }],
        },
        {
          header: "Galant Schemata",
          nav: [
            {
              name: "Galant schemata – opens and closes",
              link: "/schemataOpensAndCloses",
            },
            {
              name: "Galant Schemata – continuation patterns",
              link: "/schemataContinuationPatterns",
            },
            {
              name: "Galant schemata – summary",
              link: "/schemataSummary",
            },
            {
              name: "Improvising a sentence with galant schemata",
              link: "/schemata-improv",
            },
          ],
        },
        {
          header: "(Post-tonal) Basics",
          nav: [
            {
              name: "Pitch (class)",
              link: "/pitch-class",
            },
            {
              name: "Interval (class).",
              link: "/interval-class",
            },
            {
              name: "Modular 12 arithmetic",
              link: "/mod12",
            },
          ],
        },
        {
          header: "(Post-tonal) Organizing Forces",
          nav: [
            {
              name: "Collections and Scales",
              link: "/scales2",
            },
            {
              name: "Symmetry and Centricity",
              link: "/symmetryAndCentricity",
            },
          ],
        },
        {
          header: "(Post-tonal) Set Theory",
          nav: [
            {
              name: "Normal Order",
              link: "/normalOrder",
            },
            {
              name: "Tranposition",
              link: "/transposition",
            },
            {
              name: "Inversion",
              link: "/inversion",
            },
            {
              name: "Set Class and Prime Form (1)",
              link: "/setClassAndPrimeForm1",
            },
            {
              name: "Set Class and Prime Form (2)",
              link: "/setClassAndPrimeForm2",
            },
            {
              name: "Complements",
              link: "/complements",
            },
            {
              name: "Common Tones under Transposition",
              link: "/commonTonesUnderTransposition",
            },
          ],
        },
        {
          header: "(Post-tonal) 12-Tone Theory",
          nav: [
            {
              name: "Basics",
              link: "/twelveToneBasics",
            },
            {
              name: "Operations",
              link: "/twelveToneOperations",
            },
            {
              name: "Intervallic Structure",
              link: "/twelveToneIntervallicStructure",
            },
            {
              name: "Derivation",
              link: "/twelveToneMusicDerivation",
            },
            {
              name: "Invariance",
              link: "/twelveToneMusicInvariance",
            },
          ],
        },
        {
          header: "(Post-tonal) General Resources",
          nav: [
            {
              name: "Analyzing a post-tonal piece from scratch",
              link: "/postTonalAnalysis",
            },
            {
              name: "Analyzing atonal music",
              link: "/atonal",
            },
            {
              name: "Analyzing 12-tone music",
              link: "/twelveTone",
            },
            {
              name: "Glossary of atonal musical terms",
              link: "/atonalGlossary",
            },
            {
              name: "Sheet of blank chromatic-scale clock faces",
              link: "/Graphics/blankClockFaces.pdf",
              href: "true",
            },
          ],
        },
        {
          header: "(Pop/Rock) Rhythm",
          nav: [
            {
              name: "Syncopation in pop/rock music",
              link: "/syncopation",
            },
          ],
        },
        {
          header: "(Pop/Rock) Harmony",
          nav: [
            {
              name: "Harmony in pop/rock music",
              link: "/popRockHarmony",
            },
            {
              name: "The '50s doo-wop' progression",
              link: "/popRockHarmony-dooWop",
            },
            {
              name: "The 'Singer/Songwriter' progression",
              link: "/popRockHarmony-sscp",
            },
            {
              name: "The 'Puff' progression",
              link: "/popRockHarmony-puff",
            },
            {
              name: "The blues progression",
              link: "/popRockHarmony-blues",
            },
            {
              name: "The lament progression",
              link: "/popRockHarmony-lament",
            },
            {
              name: "The circle-of-5ths progression (minor)",
              link: "/popRockHarmony-fifths",
            },
            {
              name: "Plagal progressions",
              link: "/popRockHarmony-plagal",
            },
          ],
        },
        {
          header: "(Pop/Rock) Form",
          nav: [
            { name: "Form in pop/rock music overview", link: "/popRockForm" },
            {
              name: "Terminology and basic concepts",
              link: "/popRockForm-terms",
            },
            {
              name: "Formal containers and module structures",
              link: "/popRockForm-containers",
            },
            {
              name: "Formal functions",
              link: "/popRockForm-functions",
            },
            {
              name: "Analytical notation",
              link: "/popRockForm-notation",
            },
          ],
        },
        {
          header: "(Pop/Rock) General Resources",
          nav: [
            {
              name: "Pop/Rock terminology and concepts",
              link: "/popRockForm-terms",
            },
          ],
        },
        {
          header: "Text and music",
          nav: [
            {
              name: "Analyzing poetry",
              link: "/analyzingPoetry",
            },
          ],
        },
        {
          header: "Technology",
          nav: [
            {
              name: "Using Trinket (interactive music notation)",
              link: "/trinket",
            },
          ],
        },
        {
          header: "Technology",
          nav: [
            {
              name: "Using Trinket (interactive music notation)",
              link: "/trinket",
            },
          ],
        },
      ],
    };
  },
};
</script>
