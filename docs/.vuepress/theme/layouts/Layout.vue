<template>
  <div class="layout" id="myLayout">
    <div class="sticky_head">
      <div class="center_nav_container hamburger_align">
        <svg
          v-on:click="toggle_sidebar"
          class="bi bi-list hamburger_toggle"
          width="28"
          height="28"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <aside>
      <div class="logo_container center_nav_container">
        <p class="logo_text center_text">
          Open
          <br />Music
          <br />Theory
        </p>
      </div>
      <div class="center_nav_container">
        <input
          type="text"
          id="search_toc_bar"
          v-on:keyup="search_toc()"
          placeholder="Search...  "
          title="Search for page"
        />
      </div>

      <ul class="nav_container center_nav_container" id="nav_list_menu">
        <li class="nav_section" v-for="val in nav_build">
          <dl>
            <dt class="nav_header">{{ val.header }}</dt>
            <dd class="nav_item" v-for="nav_val in val.nav">
              <a
                v-on:click="toggle_sidebar"
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
              <router-link
                v-else
                v-on:click.native="toggle_sidebar"
                :to="nav_val.link"
                :id="nav_val.name"
              >
                <span class="hitbox_span">
                  <span class="underline_span">{{ nav_val.name }}</span>
                </span>
              </router-link>
            </dd>
          </dl>
        </li>
      </ul>
    </aside>
    <main>
      <div class="main_content_container">
        <h1>{{ $title }}</h1>
        <Content />
        <div class="CC_license">
          This work is licensed under a
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-sa/4.0/"
          >
            Creative Commons Attribution-ShareAlike 4.0 International
            License
          </a>.
          <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
            <img
              class="CC_lic_img"
              alt="Creative Commons License"
              style=" padding: 0; margin-top: 20px;"
              src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png"
            />
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
var desktop_flag = false;
export default {
  mounted: function() {
    function rule(x) {
      var t = document.getElementById("myLayout");
      if (!x.matches) {
        t.className = "layout";
        desktop_flag = true;
      } else {
        desktop_flag = false;
      }
    }

    var x = window.matchMedia("(max-width: 900px)");
    rule(x); // initial call
    x.addListener(rule); // attach listener
  },
  methods: {
    toggle_sidebar: function() {
      var x = document.getElementById("myLayout");
      if (x.className === "layout" && !desktop_flag) {
        x.className += " mobile_nav_active";
      } else {
        x.className = "layout";
      }
      scroll(0, 0);
    },
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
    }
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
              link: "/about.html"
            }
          ]
        },
        {
          header: "Fundamentals",
          nav: [
            { name: "Basic notation", link: "/basicNotation.html" },
            {
              name: "Meter",
              link: "/meter.html"
            },
            {
              name: "Protonotation",
              link: "/protonotation.html"
            },
            {
              name: "Rhythmic values",
              link: "/rhythmicValues.html"
            },
            {
              name: "Beams and borrowed divisions",
              link: "/beams.html"
            },
            {
              name: "Pitches",
              link: "/pitches.html"
            },
            {
              name: "Scales and scale degrees",
              link: "/scales.html"
            },
            {
              name: "Key signatures",
              link: "/keySignatures.html"
            },
            {
              name: "Intervals",
              link: "/intervals.html"
            },
            {
              name: "Triads and 7th chords",
              link: "/triads.html"
            },
            {
              name: "Types of motion",
              link: "/motionTypes.html"
            }
          ]
        },
        {
          header: "Voice-leading and model composition",
          nav: [
            {
              name: "Introduction to strict voice-leading",
              link: "/speciesIntro.html"
            }
          ]
        },
        {
          header: "Strict 2-voice composition (species counterpoint)",
          nav: [
            {
              name: "Composing a cantus firmus",
              link: "/cantusFirmus.html"
            },
            {
              name: "Composing a first-species counterpoint",
              link: "/firstSpecies.html"
            },
            {
              name: "Composing a second-species counterpoint",
              link: "/secondSpecies.html"
            },
            {
              name: "Composing a third-species counterpoint",
              link: "/thirdSpecies.html"
            },
            {
              name: "Composing a fourth-species counterpoint",
              link: "/fourthSpecies.html"
            }
          ]
        },
        {
          header: "Strict four-voice composition",
          nav: [
            {
              name: "Introduction to thoroughbass",
              link: "/thoroughbassFigures.html"
            },
            {
              name: "A brief history of basso continuo",
              link: "/bassoContinuo-history.html"
            },
            {
              name: "Generating Roman numerals from a figured bass line",
              link: "/RNfromFB.html"
            },
            {
              name: "Composing in basso-continuo style",
              link: "/bassoContinuo.html"
            },
            {
              name: "Style and tendency",
              link: "/tendency.html"
            },
            {
              name: "Tendency tones and functional harmonic dissonances",
              link: "/tendencyTonesFunctionalDissonances.html"
            },
            {
              name:
                "Realizing a figured bass in strict basso continuo style (video)",
              link: "/TBDemo.html"
            },
            {
              name: "Melodic keyboard style voice-leading",
              link: "/melodicKeyboardStyle.html"
            },
            {
              name: "Melodic keyboard style voice-leading schemata",
              link: "/KBVLschemata.html"
            },
            {
              name:
                "Realizing a figured bass line in melodic keyboard style (video)",
              link: "/melodicKB.html"
            },
            {
              name: "Realizing an unfigured bass line (video)",
              link: "/unfiguredBass.html"
            },
            {
              name: "Embellishing tones",
              link: "/embellishingTones.html"
            }
          ]
        },
        {
          header: "Harmony",
          nav: [
            {
              name: "Introduction to musical functions",
              link: "/functions.html"
            },
            {
              name: "Harmonic functions",
              link: "/harmonicFunctions.html"
            },
            {
              name: "Harmonic syntax - the idealized phrase",
              link: "/harmonicSyntax1.html"
            },
            {
              name: "Harmonic syntax - prolongation",
              link: "/harmonicSyntax2.html"
            },
            {
              name: "Performing a harmonic analysis",
              link: "/harmonicAnalysis.html"
            },
            {
              name: "Classical cadence types",
              link: "/cadenceTypes.html"
            },
            {
              name: "Chromatically altered subdominant chords",
              link: "/alteredSubdominants.html"
            },
            {
              name: "Applied chords",
              link: "/appliedChords.html"
            },
            {
              name: "Modal mixture",
              link: "/modalMixture.html"
            },
            {
              name: "Modulation",
              link: "/Modulation.html"
            }
          ]
        },
        {
          header: "Handouts and charts ",
          nav: [
            {
              name: "Lead-sheet and figured-bass symbols",
              link: "Graphics/Handouts/LSandFBsymbols.pdf",
              href: "true"
            },
            {
              name:
                "Harmonies (Roman numerals and functional bass) by bass scale degree",
              link: "Graphics/Handouts/HarmoniesByBassScaleDegree.pdf",
              href: "true"
            }
          ]
        },
        {
          header: " Classical theme types",
          nav: [
            {
              name: "The sentence.",
              link: "/sentence.html"
            },
            {
              name: "The period",
              link: "/period.html"
            },
            {
              name: "Hybrid themes",
              link: "/hybridThemes.html"
            },
            {
              name: "Compound periods",
              link: "/compoundPeriod.html"
            },
            {
              name: "Compound sentences",
              link: "/compoundSentence.html"
            },
            {
              name: "The small ternary",
              link: "/smallTernary.html"
            },
            {
              name: "The small binary",
              link: "/smallBinary.html"
            },
            {
              name: "Theme type reference",
              link: "/classicalThemes.html"
            },
            {
              name: "Thematic function reference",
              link: "/themeFunctions.html"
            }
          ]
        },
        {
          header: "Techniques of Phrase Rhythm ",
          nav: [
            {
              name: "External Expansions",
              link: "/externalExpansions.html"
            },
            {
              name: "Internal Expansions",
              link: "/internalExpansions.html"
            }
          ]
        },
        {
          header: "Sonata Form ",
          nav: [
            {
              name: "Introduction to Sonata Theory",
              link: "/SonataTheory-intro.html"
            },
            {
              name: "Sonata form: exposition types",
              link: "/SonataTheory-exposition.html"
            },
            {
              name: "Structural Points of Arrival",
              link: "/sonataStructuralPointsOfArrival.html"
            },
            {
              name: "Thematic Modules",
              link: "/sonataThematicModules.html"
            },
            {
              name: "Sonata form: the recapitulation",
              link: "/sonataRecap.html"
            },
            {
              name: "Sonata form: the development",
              link: "/sonataDevelopment.html"
            },
            {
              name: "Sonata form: framing modules (intro & coda)",
              link: "/sonataFramingModules.html"
            }
          ]
        },
        {
          header: "Rondo Form",
          nav: [
            { name: "Introduction to Rondo form", link: "/rondo.html" },
            {
              name: "Thematic Function in Rondo Form",
              link: "/thematicFunctionInRondo.html"
            },
            {
              name: "Five-Part Rondo",
              link: "/fivePartRondo.html"
            },
            {
              name: "Sonata Rondo",
              link: "/sonataRondo.html"
            }
          ]
        },
        {
          header: "Other formal structures in the classical style",
          nav: [{ name: "Minuet form", link: "/minuet.html" }]
        },
        {
          header: "Galant Schemata",
          nav: [
            {
              name: "Galant schemata – opens and closes",
              link: "/schemataOpensAndCloses.html"
            },
            {
              name: "Galant Schemata – continuation patterns",
              link: "/schemataContinuationPatterns.html"
            },
            {
              name: "Galant schemata – summary",
              link: "/schemataSummary.html"
            },
            {
              name: "Improvising a sentence with galant schemata",
              link: "/schemata-improv.html"
            }
          ]
        },
        {
          header: "(Post-tonal) Basics",
          nav: [
            {
              name: "Pitch (class)",
              link: "/pitch-class.html"
            },
            {
              name: "Interval (class).",
              link: "/interval-class.html"
            },
            {
              name: "Modular 12 arithmetic",
              link: "/mod12.html"
            }
          ]
        },
        {
          header: "(Post-tonal) Organizing Forces",
          nav: [
            {
              name: "Collections and Scales",
              link: "/scales2.html"
            },
            {
              name: "Symmetry and Centricity",
              link: "/symmetryAndCentricity.html"
            }
          ]
        },
        {
          header: "(Post-tonal) Set Theory",
          nav: [
            {
              name: "Normal Order",
              link: "/normalOrder.html"
            },
            {
              name: "Tranposition",
              link: "/transposition.html"
            },
            {
              name: "Inversion",
              link: "/inversion.html"
            },
            {
              name: "Set Class and Prime Form (1)",
              link: "/setClassAndPrimeForm1.html"
            },
            {
              name: "Set Class and Prime Form (2)",
              link: "/setClassAndPrimeForm2.html"
            },
            {
              name: "Complements",
              link: "/complements.html"
            },
            {
              name: "Common Tones under Transposition",
              link: "/commonTonesUnderTransposition.html"
            }
          ]
        },
        {
          header: "(Post-tonal) 12-Tone Theory",
          nav: [
            {
              name: "Basics",
              link: "/twelveToneBasics.html"
            },
            {
              name: "Operations",
              link: "/twelveToneOperations.html"
            },
            {
              name: "Intervallic Structure",
              link: "/twelveToneIntervallicStructure.html"
            },
            {
              name: "Derivation",
              link: "/twelveToneMusicDerivation.html"
            },
            {
              name: "Invariance",
              link: "/twelveToneMusicInvariance.html"
            }
          ]
        },
        {
          header: "(Post-tonal) General Resources",
          nav: [
            {
              name: "Analyzing a post-tonal piece from scratch",
              link: "/postTonalAnalysis.html"
            },
            {
              name: "Analyzing atonal music",
              link: "/atonal.html"
            },
            {
              name: "Analyzing 12-tone music",
              link: "/twelveTone.html"
            },
            {
              name: "Glossary of atonal musical terms",
              link: "/atonalGlossary.html"
            },
            {
              name: "Sheet of blank chromatic-scale clock faces",
              link: "/Graphics/blankClockFaces.pdf",
              href: "true"
            }
          ]
        },
        {
          header: "(Pop/Rock) Rhythm",
          nav: [
            {
              name: "Syncopation in pop/rock music",
              link: "/syncopation.html"
            }
          ]
        },
        {
          header: "(Pop/Rock) Harmony",
          nav: [
            {
              name: "Harmony in pop/rock music",
              link: "/popRockHarmony.html"
            },
            {
              name: "The '50s doo-wop' progression",
              link: "/popRockHarmony-dooWop.html"
            },
            {
              name: "The 'Singer/Songwriter' progression",
              link: "/popRockHarmony-sscp.html"
            },
            {
              name: "The 'Puff' progression",
              link: "/popRockHarmony-puff.html"
            },
            {
              name: "The blues progression",
              link: "/popRockHarmony-blues.html"
            },
            {
              name: "The lament progression",
              link: "/popRockHarmony-lament.html"
            },
            {
              name: "The circle-of-5ths progression (minor)",
              link: "/popRockHarmony-fifths.html"
            },
            {
              name: "Plagal progressions",
              link: "/popRockHarmony-plagal.html"
            }
          ]
        },
        {
          header: "(Pop/Rock) Form",
          nav: [
            {
              name: "Form in pop/rock music overview",
              link: "/popRockForm.html"
            },
            {
              name: "Terminology and basic concepts",
              link: "/popRockForm-terms.html"
            },
            {
              name: "Formal containers and module structures",
              link: "/popRockForm-containers.html"
            },
            {
              name: "Formal functions",
              link: "/popRockForm-functions.html"
            },
            {
              name: "Analytical notation",
              link: "/popRockForm-notation.html"
            }
          ]
        },
        {
          header: "(Pop/Rock) General Resources",
          nav: [
            {
              name: "Pop/Rock terminology and concepts",
              link: "/popRockForm-terms.html"
            }
          ]
        },
        {
          header: "Text and music",
          nav: [
            {
              name: "Analyzing poetry",
              link: "/analyzingPoetry.html"
            }
          ]
        },
        {
          header: "Technology",
          nav: [
            {
              name: "Using Trinket (interactive music notation)",
              link: "/trinket.html"
            }
          ]
        }
      ]
    };
  }
};
</script>
