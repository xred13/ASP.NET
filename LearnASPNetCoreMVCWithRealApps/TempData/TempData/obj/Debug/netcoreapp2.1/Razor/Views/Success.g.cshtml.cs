#pragma checksum "C:\Users\fabio\Desktop\MyGitRepos\ASP.NET\LearnASPNetCoreMVCWithRealApps\TempData\TempData\Views\Success.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "ab0113106571b38fcfc3539f935e7fe1e2e69e7f"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Success), @"mvc.1.0.view", @"/Views/Success.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Success.cshtml", typeof(AspNetCore.Views_Success))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 6 "C:\Users\fabio\Desktop\MyGitRepos\ASP.NET\LearnASPNetCoreMVCWithRealApps\TempData\TempData\Views\Success.cshtml"
using TempData.Models;

#line default
#line hidden
#line 7 "C:\Users\fabio\Desktop\MyGitRepos\ASP.NET\LearnASPNetCoreMVCWithRealApps\TempData\TempData\Views\Success.cshtml"
using TempData.Helpers;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ab0113106571b38fcfc3539f935e7fe1e2e69e7f", @"/Views/Success.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a9af4978b9c2bfca24ef48e96efe5f8573634464", @"/_ViewImports.cshtml")]
    public class Views_Success : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 2 "C:\Users\fabio\Desktop\MyGitRepos\ASP.NET\LearnASPNetCoreMVCWithRealApps\TempData\TempData\Views\Success.cshtml"
  
    Layout = null;

#line default
#line hidden
            BeginContext(29, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(80, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 9 "C:\Users\fabio\Desktop\MyGitRepos\ASP.NET\LearnASPNetCoreMVCWithRealApps\TempData\TempData\Views\Success.cshtml"
   
    var product = TempDataHelper.Get<Product>(TempData, "product") as Product;

#line default
#line hidden
            BeginContext(170, 29, true);
            WriteLiteral("\r\n<!DOCTYPE html>\r\n\r\n<html>\r\n");
            EndContext();
            BeginContext(199, 102, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "8f9a61dd387d4377ba51bc079b78b411", async() => {
                BeginContext(205, 89, true);
                WriteLiteral("\r\n    <meta name=\"viewport\" content=\"width=device-width\" />\r\n    <title>Success</title>\r\n");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(301, 4, true);
            WriteLiteral("\r\n\r\n");
            EndContext();
            BeginContext(305, 611, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "f6072ca7ad75433494407313ed7eadf8", async() => {
                BeginContext(311, 112, true);
                WriteLiteral("\r\n    <h3>Single Values</h3>\r\n\r\n    <table border=\"1\">\r\n        <tr>\r\n            <td>Age</td>\r\n            <td>");
                EndContext();
                BeginContext(424, 15, false);
#line 27 "C:\Users\fabio\Desktop\MyGitRepos\ASP.NET\LearnASPNetCoreMVCWithRealApps\TempData\TempData\Views\Success.cshtml"
           Write(TempData["age"]);

#line default
#line hidden
                EndContext();
                BeginContext(439, 83, true);
                WriteLiteral("</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Username</td>\r\n            <td>");
                EndContext();
                BeginContext(523, 20, false);
#line 31 "C:\Users\fabio\Desktop\MyGitRepos\ASP.NET\LearnASPNetCoreMVCWithRealApps\TempData\TempData\Views\Success.cshtml"
           Write(TempData["username"]);

#line default
#line hidden
                EndContext();
                BeginContext(543, 133, true);
                WriteLiteral("</td>\r\n        </tr>\r\n    </table>\r\n\r\n    <h3>Product Info</h3>\r\n    <table>\r\n        <tr>\r\n            <td>Id</td>\r\n            <td>");
                EndContext();
                BeginContext(677, 10, false);
#line 39 "C:\Users\fabio\Desktop\MyGitRepos\ASP.NET\LearnASPNetCoreMVCWithRealApps\TempData\TempData\Views\Success.cshtml"
           Write(product.Id);

#line default
#line hidden
                EndContext();
                BeginContext(687, 79, true);
                WriteLiteral("</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Name</td>\r\n            <td>");
                EndContext();
                BeginContext(767, 12, false);
#line 43 "C:\Users\fabio\Desktop\MyGitRepos\ASP.NET\LearnASPNetCoreMVCWithRealApps\TempData\TempData\Views\Success.cshtml"
           Write(product.Name);

#line default
#line hidden
                EndContext();
                BeginContext(779, 80, true);
                WriteLiteral("</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Price</td>\r\n            <td>");
                EndContext();
                BeginContext(860, 13, false);
#line 47 "C:\Users\fabio\Desktop\MyGitRepos\ASP.NET\LearnASPNetCoreMVCWithRealApps\TempData\TempData\Views\Success.cshtml"
           Write(product.Price);

#line default
#line hidden
                EndContext();
                BeginContext(873, 36, true);
                WriteLiteral("</td>\r\n        </tr>\r\n    </table>\r\n");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(916, 11, true);
            WriteLiteral("\r\n</html>\r\n");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
