#pragma checksum "C:\Users\fabio\Desktop\MyGitRepos\ASP.NET\LearnASPNetCoreMVCWithRealApps\ObjectFromControllerToView\ObjectFromControllerToView\Views\Demo\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "7e56c0da1ec1fb6437a39219dc359898bb3af85c"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Demo_Index), @"mvc.1.0.view", @"/Views/Demo/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Demo/Index.cshtml", typeof(AspNetCore.Views_Demo_Index))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"7e56c0da1ec1fb6437a39219dc359898bb3af85c", @"/Views/Demo/Index.cshtml")]
    public class Views_Demo_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
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
#line 2 "C:\Users\fabio\Desktop\MyGitRepos\ASP.NET\LearnASPNetCoreMVCWithRealApps\ObjectFromControllerToView\ObjectFromControllerToView\Views\Demo\Index.cshtml"
  
    Layout = null;

#line default
#line hidden
            BeginContext(29, 29, true);
            WriteLiteral("\r\n<!DOCTYPE html>\r\n\r\n<html>\r\n");
            EndContext();
            BeginContext(58, 100, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "3a0c53e2fb304b969d360c45f38b7673", async() => {
                BeginContext(64, 87, true);
                WriteLiteral("\r\n    <meta name=\"viewport\" content=\"width=device-width\" />\r\n    <title>Index</title>\r\n");
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
            BeginContext(158, 4, true);
            WriteLiteral("\r\n\r\n");
            EndContext();
            BeginContext(162, 649, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "b051f26c7b25402a99dcee8a2bffc532", async() => {
                BeginContext(168, 140, true);
                WriteLiteral("\r\n    <h3>Product info</h3>\r\n    <table border=\"1\" cellpadding=\"2\" cellspacing=\"2\">\r\n        <tr>\r\n            <td>ID</td>\r\n            <td>");
                EndContext();
                BeginContext(309, 18, false);
#line 19 "C:\Users\fabio\Desktop\MyGitRepos\ASP.NET\LearnASPNetCoreMVCWithRealApps\ObjectFromControllerToView\ObjectFromControllerToView\Views\Demo\Index.cshtml"
           Write(ViewBag.product.Id);

#line default
#line hidden
                EndContext();
                BeginContext(327, 79, true);
                WriteLiteral("</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Name</td>\r\n            <td>");
                EndContext();
                BeginContext(407, 20, false);
#line 23 "C:\Users\fabio\Desktop\MyGitRepos\ASP.NET\LearnASPNetCoreMVCWithRealApps\ObjectFromControllerToView\ObjectFromControllerToView\Views\Demo\Index.cshtml"
           Write(ViewBag.product.Name);

#line default
#line hidden
                EndContext();
                BeginContext(427, 80, true);
                WriteLiteral("</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Price</td>\r\n            <td>");
                EndContext();
                BeginContext(508, 21, false);
#line 27 "C:\Users\fabio\Desktop\MyGitRepos\ASP.NET\LearnASPNetCoreMVCWithRealApps\ObjectFromControllerToView\ObjectFromControllerToView\Views\Demo\Index.cshtml"
           Write(ViewBag.product.Price);

#line default
#line hidden
                EndContext();
                BeginContext(529, 83, true);
                WriteLiteral("</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Quantity</td>\r\n            <td>");
                EndContext();
                BeginContext(613, 24, false);
#line 31 "C:\Users\fabio\Desktop\MyGitRepos\ASP.NET\LearnASPNetCoreMVCWithRealApps\ObjectFromControllerToView\ObjectFromControllerToView\Views\Demo\Index.cshtml"
           Write(ViewBag.product.Quantity);

#line default
#line hidden
                EndContext();
                BeginContext(637, 80, true);
                WriteLiteral("</td>\r\n        </tr>\r\n        <tr>\r\n            <td>Total</td>\r\n            <td>");
                EndContext();
                BeginContext(719, 48, false);
#line 35 "C:\Users\fabio\Desktop\MyGitRepos\ASP.NET\LearnASPNetCoreMVCWithRealApps\ObjectFromControllerToView\ObjectFromControllerToView\Views\Demo\Index.cshtml"
            Write(ViewBag.product.price * ViewBag.product.Quantity);

#line default
#line hidden
                EndContext();
                BeginContext(768, 36, true);
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
            BeginContext(811, 13, true);
            WriteLiteral("\r\n</html>\r\n\r\n");
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
